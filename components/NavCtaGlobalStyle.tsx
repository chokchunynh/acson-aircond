'use client';

/**
 * Styled-jsx :global(.nav-cta) shim.
 *
 * The header's WhatsApp CTA is rendered by <WhatsAppButton>, a different
 * component from <SiteHeader>. A scoped rule would be stamped with SiteHeader's
 * data attribute and never reach it, so the selector has to be :global.
 * The same rules also live unlayered in globals.css — that copy is what paints
 * before hydration; this one exists so the selector survives the component
 * boundary. (Checklist rule `nav-cta-global-scope`.)
 */
export default function NavCtaGlobalStyle() {
  return (
    <style jsx>{`
      :global(.nav-cta) {
        height: 40px;
        padding: 0 14px;
        font-size: 13px;
        line-height: 1;
        white-space: nowrap;
      }
      @media (max-width: 879px) {
        :global(.nav-cta) {
          display: none !important;
        }
      }
    `}</style>
  );
}
