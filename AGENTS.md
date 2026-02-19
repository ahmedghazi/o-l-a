# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

O—L—A is a portfolio website for Olivier Lellouche, an architecture/design workshop. The project is a monorepo with two main packages:

- **studio/** - Sanity CMS v5 (React-based content management)
- **web/** - Nuxt 4 frontend (Vue 3, TailwindCSS, SCSS)

## Commands

### Development
```bash
# From root - start Sanity Studio (localhost:3333)
yarn s

# From root - start Nuxt frontend (localhost:3000)
yarn w

# Or from individual directories
cd studio && yarn dev
cd web && yarn dev
```

### Studio Deployment
```bash
cd studio
yarn d              # Deploy GraphQL + Studio + generate types
yarn deploy         # Deploy Sanity Studio only
yarn deploy-graphql # Deploy GraphQL API
yarn codegen        # Generate TypeScript types and copy to web/types
```

### Git Workflow
```bash
yarn d     # Commit and push to main
yarn d:p   # Commit and push to preprod branch
```

## Node Version

Studio requires **Node 22.22.0** (see `studio/.nvmrc`)

## Architecture

### Sanity Studio (`studio/`)

Schema organization:
- `schemaTypes/singletons/` - Single-instance documents: `home`, `settings`, `infos`
- `schemaTypes/documents/` - Collections: `project`, `tag`
- `schemaTypes/objects/` - Reusable field types: `blockContent`, `seo`, `linkInternal`, `linkExternal`, `keyVal`, `keyValGroup`

Key files:
- `sanity.config.ts` - Plugin config (media, presentation tool, vision)
- `src/deskStructure.tsx` - Custom Studio sidebar structure
- `src/linkResolver.ts` - Preview URL mapping for presentation mode

Preview URLs:
- Local: `http://localhost:3000`
- Production: `https://o-l-a.vercel.app`

### Nuxt Frontend (`web/`)

```
app/
├── pages/           # Routes: index, infos, project/[slug]
├── components/      # Vue components (Header, ProjectCard, SanityImage, SmoothScroller)
├── composables/     # useSanity.ts (data fetching), useScroll.ts
├── lib/
│   ├── queries.ts   # GROQ queries (SETTINGS_QUERY, HOME_QUERY, PROJECT_QUERY, INFOS_QUERY)
│   └── sanity.ts    # Sanity client + urlFor() image helper
├── layouts/         # default.vue
└── assets/styles/   # SCSS with _variables, _mixins auto-imported
```

### Styling

- Global SCSS in `web/app/assets/styles/`
- `_variables.scss` and `_mixins.scss` are auto-imported via Nuxt config
- TailwindCSS available alongside SCSS

### Type Generation

Types are generated from Sanity schemas using `sanity-codegen`:
1. Run `yarn codegen` in studio
2. Types are copied to `web/types/`

## Sanity Configuration

- **Project ID**: `na80rqjb`
- **Dataset**: `production`
- **API Version**: `2024-01-01`
- **Studio URL**: https://oldw-backoffice.sanity.studio/
