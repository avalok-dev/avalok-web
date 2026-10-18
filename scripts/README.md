Generators kept for reference (not part of the build):

- `og-image.tsx.txt`: renders `public/og.png` (1200x630).
- `icon-gen.tsx.txt`: renders `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` (change the `s` size).

To regenerate: copy the file to `src/app/<name>/route.tsx` (or `opengraph-image.tsx`), run `pnpm build`, copy the file from `out/`
to `public/` as a `.png`, then delete the temporary route.
