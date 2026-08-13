/**
 * The one style block shared by the homepage, the coverage index and every
 * location page, so a tweak to a section lands on all of them at once.
 *
 * Plain <style>, not <style jsx>: styled-jsx in a client component ships its
 * CSS inside the JS bundle, so the markup paints unstyled until hydration.
 * Everything here is wrapped in `@layer components` — unlayered CSS outranks
 * every Tailwind utility regardless of specificity, and these sections mix
 * both, so the layer keeps utilities winning where the markup asks for them.
 */
export default function PageStyles() {
  return (
    <style>{`
@layer components {
  .container-page { max-width: 80rem; margin: 0 auto; padding-left: 1rem; padding-right: 1rem; }
  @media (min-width: 640px) { .container-page { padding-left: 1.5rem; padding-right: 1.5rem; } }
  @media (min-width: 1024px) { .container-page { padding-left: 2rem; padding-right: 2rem; } }

  /* Wrapping body copy in h5/h6 (house rule) must not pick up heading sizing. */
  .section-body h5, .section-body h6 { font-weight: inherit; }

  /* ---- USP bar: ONE panel with three cells, never three floating cards ---- */
  .usp-panel {
    display: grid;
    grid-template-columns: 1fr;
    background: #fff;
    border: 1px solid var(--color-border);
    border-radius: var(--r-card);
    box-shadow: 0 4px 16px rgba(26, 17, 24, 0.06);
    overflow: hidden;
  }
  .usp-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    text-align: center;
    padding: 22px 20px;
    border-bottom: 1px solid var(--color-border);
  }
  .usp-cell:last-child { border-bottom: none; }
  .usp-cell__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: var(--r-button);
    background: rgba(204, 27, 43, 0.1);
    color: var(--color-brand);
  }
  .usp-cell__title { font-size: 0.9375rem; font-weight: 700; color: var(--color-text-dark); margin: 0; }
  .usp-cell__body { font-size: 0.8125rem; color: var(--color-text-muted); margin: 0; max-width: 30ch; }
  @media (min-width: 768px) {
    .usp-panel { grid-template-columns: repeat(3, 1fr); }
    .usp-cell { border-bottom: none; border-right: 1px solid var(--color-border); }
    .usp-cell:last-child { border-right: none; }
  }

  /* ---- Trusted-by logo strip ---- */
  .trust-strip { display: flex; flex-direction: column; align-items: center; gap: 14px; }
  .trust-strip__label {
    font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--color-text-muted); margin: 0;
  }
  .trust-strip__logos { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 10px 22px; }
  .trust-strip__item {
    padding: 8px 16px;
    border: 1px solid var(--color-border);
    border-radius: var(--r-button);
    background: var(--color-gray-50);
    font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.06em;
    text-transform: uppercase; color: var(--color-text-muted);
  }

  /* ---- Process / steps closing CTA ---- */
  .process-cta {
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    text-align: center; margin-top: 2.5rem;
  }
  .process-cta__note { font-size: 0.875rem; color: var(--color-text-muted); margin: 0; max-width: 46ch; }

  /* ---- Breadcrumb ---- */
  .breadcrumb { display: inline-flex; flex-wrap: wrap; gap: 8px; font-size: 13px; margin: 0 0 18px; padding: 0; }
  .breadcrumb a { color: var(--color-brand); font-weight: 600; text-decoration: none; }
  .breadcrumb a:hover { text-decoration: underline; }
  .breadcrumb span[aria-hidden="true"] { color: var(--color-text-muted); }
  .breadcrumb [aria-current="page"] { color: var(--color-text-dark); font-weight: 600; }
  .breadcrumb--onDark a { color: #fff; }
  .breadcrumb--onDark span[aria-hidden="true"] { color: rgba(255,255,255,0.45); }
  .breadcrumb--onDark [aria-current="page"] { color: rgba(255,255,255,0.85); }

  /* ---- Blog listing grid ---- */
  .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
  .blog-card {
    display: flex; flex-direction: column; overflow: hidden;
    background: #fff; border: 1px solid var(--color-border); border-radius: var(--r-card);
    box-shadow: 0 4px 16px rgba(26, 17, 24, 0.05);
    transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
  }
  .blog-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(204, 27, 43, 0.12); }
  .blog-card__img { display: block; aspect-ratio: 16 / 9; overflow: hidden; background: var(--color-gray-50); }
  .blog-card__img img { width: 100%; height: 100%; object-fit: cover; }
  .blog-card__body { display: flex; flex-direction: column; gap: 8px; padding: 20px; flex: 1; }
  .blog-card__date {
    font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--color-text-muted); margin: 0;
  }
  .blog-card__title { font-family: var(--font-heading); font-size: 1.1875rem; color: var(--color-text-dark); margin: 0; }
  .blog-card__title a { color: inherit; text-decoration: none; }
  .blog-card__title a:hover { color: var(--color-brand); }
  .blog-card__excerpt {
    font-size: 0.875rem; color: var(--color-text-body); margin: 0;
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }
  .blog-card__link { margin-top: auto; font-size: 0.875rem; font-weight: 700; color: var(--color-brand); text-decoration: none; }
  .blog-card__link:hover { text-decoration: underline; }

  /* ---- Blog article chrome ---- */
  .post-header { padding: 48px 0 28px; background: var(--color-gray-50); border-bottom: 1px solid var(--color-border); }
  .post-title { font-family: var(--font-heading); font-size: clamp(1.875rem, 4vw, 2.75rem); color: var(--color-text-dark); margin: 0 0 12px; max-width: 60ch; }
  .post-excerpt { font-size: clamp(1rem, 1.4vw, 1.125rem); color: var(--color-text-body); max-width: 68ch; margin: 0; }
  .post-meta {
    display: inline-flex; flex-wrap: wrap; gap: 10px; margin: 16px 0 0;
    font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-muted);
  }
  /* Block padding only. The padding shorthand would reset the side padding
     this element inherits from .container-page and push the article text
     flush against the viewport edge. */
  .post-body-wrap { display: grid; grid-template-columns: 1fr; gap: 40px; padding-top: 32px; padding-bottom: 72px; }
  @media (min-width: 960px) { .post-body-wrap { grid-template-columns: minmax(0, 1fr) 280px; } }
  .post-body { max-width: 740px; }
  .post-sidebar {
    position: sticky; top: 96px; align-self: start;
    background: #fff; border: 1px solid var(--color-border); border-radius: var(--r-card); padding: 20px;
  }
  .post-sidebar__heading {
    font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--color-brand); margin: 0 0 12px;
  }
  .post-sidebar ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
  .post-sidebar a { font-size: 14px; font-weight: 600; color: var(--color-text-body); text-decoration: none; }
  .post-sidebar a:hover { color: var(--color-brand); }
  .blog-cta-banner {
    margin: 40px 0 0; padding: 28px; text-align: center;
    background: var(--color-gray-50); border: 1px solid var(--color-border);
    border-radius: var(--r-card);
  }
  .blog-cta-banner__title { font-family: var(--font-heading); font-size: 1.375rem; color: var(--color-text-dark); margin: 0 0 8px; }
  .blog-cta-banner__body { font-size: 0.9375rem; color: var(--color-text-body); margin: 0 0 18px; }
  .blog-empty { text-align: center; color: var(--color-text-muted); padding: 48px 0; }

  /* ---- Location / coverage ---- */
  .loc-hero { position: relative; overflow: hidden; padding: 120px 0 56px; color: #fff; }
  .loc-hero__bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
  .loc-hero__scrim {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.55));
  }
  .loc-hero__inner { position: relative; z-index: 1; text-align: center; }
  .loc-hero__eyebrow {
    font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
    color: rgba(255,255,255,0.72); margin: 0 0 12px;
  }
  .loc-hero__title { font-family: var(--font-heading); font-size: clamp(2rem, 5vw, 3.25rem); color: #fff; margin: 0 0 14px; }
  .loc-hero__subtitle { font-size: clamp(1rem, 1.6vw, 1.1875rem); font-weight: 400; color: rgba(255,255,255,0.82); margin: 0 auto 26px; max-width: 60ch; }
  .loc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; }
  .loc-grid a {
    display: block; padding: 12px 14px; font-size: 0.875rem; font-weight: 600;
    color: var(--color-text-body); text-decoration: none;
    background: #fff; border: 1px solid var(--color-border); border-radius: var(--r-button);
    transition: border-color var(--dur) var(--ease), color var(--dur) var(--ease);
  }
  .loc-grid a:hover { border-color: var(--color-brand); color: var(--color-brand); }
  .state-block { margin-bottom: 40px; }
  .state-block__heading {
    display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap;
    font-family: var(--font-heading); font-size: 1.375rem; color: var(--color-text-dark); margin: 0 0 14px;
  }
  .state-block__count { font-family: var(--font-body); font-size: 0.75rem; font-weight: 600; color: var(--color-text-muted); }
}
    `}</style>
  );
}
