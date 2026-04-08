# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Portfolio Website (`artifacts/portfolio`)
- **Kind**: react-vite
- **Preview path**: `/`
- **Purpose**: Personal portfolio for Udit Narayan (Data Analyst & Freelancer)
- **Features**:
  - Dark cyberpunk/data aesthetic with cyan/purple color scheme
  - Animated particle canvas, CSS 3D decorative elements, floating cards
  - Typewriter animation for role cycling
  - Navigation: About, Experience, Freelance, Skills, Contact
  - All resume data: 4 professional roles, 2 freelance projects, skills with progress bars, education
  - Contact section with email, LinkedIn (udit-narayan-g), Instagram, phone
  - LinkedIn profile linked: https://www.linkedin.com/in/udit-narayan-g/
  - Responsive (mobile, tablet, desktop)
- **Dependencies**: react-icons/fa (FaLinkedinIn), react-icons/si (SiGmail, SiInstagram), lucide-react, framer-motion

### API Server (`artifacts/api-server`)
- **Kind**: api
- **Preview path**: `/api`
- **Purpose**: Express backend (minimal, not used by portfolio)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/portfolio run dev` — run portfolio locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
