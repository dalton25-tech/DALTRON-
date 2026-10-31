# DALTRON Agent Factory
Private, mobile-first dashboard prototype. Agent activity is simulated only.

## Stack
React + TypeScript + Vite; Vercel Functions in `/api`; Supabase Auth + PostgreSQL.

## Local commands
Use a supported Node.js LTS release. Run `npm install`, `npm run dev`, `npm test`, `npm run typecheck`, and `npm run build`.

## Security boundary
No real agent execution, shell commands, repository edits, Git operations, or deployment. API writes remain disabled until workspace authorization and database policies are completed and tested. Review the SQL migration in a disposable Supabase project before applying it.

## Environment
Copy `.env.example` to `.env.local` only when configuring a test environment. `VITE_*` values are public browser values only. Server secrets must never use a `VITE_` prefix. Provision the first owner manually; no public workspace registration.

## Vercel routing
The starter uses in-app navigation, so it does not require a catch-all SPA rewrite. Verify function discovery and routing before deployment. Deployment is not authorized by this project scaffold.
