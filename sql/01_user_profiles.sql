-- ============================================================
-- USER PROFILES — Run this in Supabase SQL Editor on every new project
--
-- IMPORTANT: The handle_new_user trigger MUST use:
--   ON CONFLICT (id) DO NOTHING
--   EXCEPTION WHEN OTHERS THEN RETURN NEW
--
-- Without these, any DB error on signup blocks auth entirely
-- (Supabase returns "Database error saving new user" and the
-- session is never created — OAuth and magic link both fail).
-- ============================================================

-- 1. User profiles table
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id            uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name  text,
  plan          text DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'business', 'enterprise')),
  settings      jsonb DEFAULT '{}'::jsonb,
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own profile" ON public.user_profiles
  FOR ALL USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- 2. Safe trigger — always succeeds even if insert fails
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.user_profiles (id, display_name)
  VALUES (
    NEW.id,
    COALESCE(
      NEW.raw_user_meta_data->>'display_name',
      NEW.raw_user_meta_data->>'full_name',
      NEW.raw_user_meta_data->>'name',
      split_part(NEW.email, '@', 1)
    )
  )
  ON CONFLICT (id) DO NOTHING;  -- safe on duplicate signins
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    RETURN NEW;  -- never block auth, even if profile insert fails
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
