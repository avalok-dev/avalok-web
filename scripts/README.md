Generators kept for reference (not part of the build):

- `og-image.tsx.txt`: renders `public/og.png` (1200x630).
- `icon-gen.tsx.txt`: renders `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` (change the `s` size).

To regenerate: copy the file to `src/app/<name>/route.tsx` (or `opengraph-image.tsx`), run `pnpm build`, copy the file from `out/`
to `public/` as a `.png`, then delete the temporary route.

## Blog

The blog routes are parked in `scripts/blog-route/` until there is a first published post (an empty `/blog/` hurts SEO).
To publish: move a file from `content/drafts/` to `content/blog/` and set its `date`, copy
`blog-index-page.tsx.txt` to `src/app/blog/page.tsx` and `blog-post-page.tsx.txt` to `src/app/blog/[slug]/page.tsx`,
add a Blog link in `src/components/Chrome.tsx` and the post URLs to `sitemap.ts` / `llms.txt`.
