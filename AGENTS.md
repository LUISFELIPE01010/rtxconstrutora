<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Uploaded site photos use optimized responsive WebP variants and a deliberate static mirror in `public/img`; independent Vercel deployments cannot rely on Lovable's asset-serving endpoint.
- Use WorkshopPhoto for below-the-fold workshop photos so responsive sources, lazy loading, decoding, and intrinsic dimensions remain consistent.
- Content photos preserve their intrinsic aspect ratio at every viewport, with portfolio captions in normal flow; home and secondary page covers and final CTA banners use an overlaid background at every viewport to keep image and text integrated.
- Quote requests are validated client-side WhatsApp handoffs with URL-encoded fields; no simulated send, persistence, or unconfirmed email destination.
- Brand facts and service/gallery data are centralized in `src/lib/rtx.ts` so all pages share the current company information.
- The home cover stacks its text and photograph on mobile as requested; secondary covers and final CTA retain overlaid photographs.
- SEO canonical URLs and sitemap are enabled only by a confirmed `VITE_PUBLIC_SITE_URL` to avoid assigning the previous company domain to a new brand.
