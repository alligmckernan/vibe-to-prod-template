# Vibe Template Repo

This is a lightweight, portable starter repo intended for AI-assisted / vibe coding workflows.
It is designed to keep code **portable**, **reviewable**, and **deployable**.

## Tech stack
- Next.js (App Router) + TypeScript
- Minimal API route: `/api/health`
- GitHub Actions CI: build on PRs and main

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```
Then visit http://localhost:3000

## Smoke test
```bash
./scripts/smoke-test.sh
```

## Deploy
- Recommended: Vercel (import repo and set env vars)
- CI ensures builds pass before merging to `main`

## Architecture
- UI entry: `app/page.tsx`
- Layout: `app/layout.tsx`
- Health endpoint: `app/api/health/route.ts`
