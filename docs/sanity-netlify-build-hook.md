# Sanity -> Netlify Auto Rebuild (Static Export)

This project uses static export (`output: "export"`), so newly published CMS content appears after a rebuild.

This guide sets up a zero-touch workflow:
- editor publishes in Sanity
- Sanity triggers Netlify build hook
- Netlify rebuilds static site
- updated files are published automatically

## 1) Confirm static build settings

Already configured in this repository:
- Next.js export mode in `next.config.ts`
- Netlify build config in `netlify.toml`:
  - build command: `npm run build`
  - publish directory: `out`

## 2) Create Netlify Build Hook

1. Open Netlify project dashboard.
2. Go to **Site configuration** -> **Build & deploy** -> **Build hooks**.
3. Click **Add build hook**.
4. Give it a name, e.g. `sanity-publish-rebuild`.
5. Copy the generated URL.

Keep this URL private. Anyone with it can trigger builds.

## 3) Create Sanity Webhook

1. Open Sanity project dashboard.
2. Go to **API** -> **Webhooks** -> **Create webhook**.
3. Configure:
   - **Name**: `netlify-rebuild-on-publish`
   - **URL**: paste Netlify build hook URL
   - **HTTP method**: `POST`
4. Trigger events:
   - Create
   - Update
   - Delete
5. Filter:

```groq
_type in ["post", "portfolio"] && !(_id in path("drafts.**"))
```

This avoids rebuilds for draft-only edits.

6. Projection (optional but recommended):

```groq
{
  "id": _id,
  "type": _type,
  "title": title,
  "slug": slug.current
}
```

7. Save the webhook.

## 4) Test end-to-end

1. Publish or update a `post` or `portfolio` document in Studio.
2. Confirm webhook event is delivered in Sanity webhook logs.
3. Confirm Netlify build starts automatically.
4. After deploy completes, verify updates on:
   - `/news`
   - `/news/[slug]`
   - `/portfolio`
   - `/test-media`

## Notes

- Static export cannot show brand-new content instantly without a rebuild.
- Build-hook automation is the low-cost alternative to running a Next.js server runtime.
- If you want fewer builds, keep the filter strict (as above) and avoid firing on draft content.
