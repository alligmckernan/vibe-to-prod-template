# Vibe Coding Engineering Policy

## Principles
1. GitHub is the source of truth. Platforms are assistants, not owners.
2. Everything must run locally and deploy via CI.
3. All changes land via pull request (PR), never direct to main.
4. Humans own understanding: architecture, risks, and production readiness.

## Required for every project
- Repo exists in org GitHub (created first)
- CI workflow enabled (build must pass on PRs)
- README includes run/test/deploy steps
- .env.example exists (no secrets committed)
- A deployment path exists (preview deploy acceptable)

## Required for every PR
- PR uses the template (key files + data flow + risks)
- CI build passes
- No secrets in code/logs
- Feature branches only; protect main

## Rituals
- 15-minute architecture walkthrough after meaningful features
- Weekly 30-minute teardown: move one PR from P0 to P1/P2 on paper
- Rotate builder/explainer roles
