# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

O—L—A is a portfolio website for Olivier Lellouche, an architecture/design workshop. The project is a monorepo with one shared Sanity Studio and two Nuxt sites.

```
o—l—a/
├── www/            # git root — all code lives here (this file)
│   ├── studio/     # Sanity CMS v5, shared by both sites
│   ├── landing/    # Nuxt 4 site — landing (localhost:3000)
│   ├── les-arbres/ # Nuxt 4 site — Les Arbres (localhost:3001)
│   └── package.json  # root scripts
├── doc/            # design references (PDF, images) — outside the repo
└── old/            # archived previous versions — outside the repo, do not edit
```

Both sites read from the same Sanity project/dataset, so a schema change in `studio/` affects both.

## Commands

### Development
```bash
# From www/ - start Sanity Studio (localhost:3333)
yarn s

# From www/ - start the landing (localhost:3000)
yarn l

# From www/ - start Les Arbres (localhost:3001)
yarn a

# Or from each package directory
cd studio && pnpm dev
cd landing && pnpm dev
cd les-arbres && pnpm dev
```

Package manager: **pnpm** in every package (`studio/`, `landing/`, `les-arbres/`). Root scripts in `www/package.json` can be run with `pnpm` or `yarn`.

### Studio Deployment
```bash
cd www/studio
pnpm d              # Deploy GraphQL + Studio + generate types
pnpm run deploy     # Deploy Sanity Studio only
pnpm deploy-graphql # Deploy GraphQL API
pnpm codegen        # Generate TypeScript types and copy to landing/types and les-arbres/types
```

### Git Workflow
```bash
# From www/
yarn d     # Commit and push to main
yarn d:p   # Commit and push to preprod branch
```

## Node Version

All packages require **Node 22.22.0** (see `.nvmrc` in `www/` and in each package)

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

Preview URLs (presentation tool — currently landing only):
- Local: `http://localhost:3000`
- Production: `https://o-l-a.vercel.app`

### Nuxt Frontends (`landing/`, `les-arbres/`)

Both sites currently share the same structure (Les Arbres started as a copy of the landing):

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

- Global SCSS in `<site>/app/assets/styles/`
- `_variables.scss` and `_mixins.scss` are auto-imported via Nuxt config
- TailwindCSS available alongside SCSS

### Type Generation

Types are generated from Sanity schemas using `sanity-codegen`:
1. Run `pnpm codegen` in `www/` (or in `www/studio`)
2. Types are copied to `landing/types/` and `les-arbres/types/`

## Sanity Configuration

- **Project ID**: `na80rqjb`
- **Dataset**: `production`
- **API Version**: `2024-01-01`
- **Studio URL**: https://oldw-backoffice.sanity.studio/
