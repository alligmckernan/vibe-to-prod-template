# Prototype to Production Rubric

Label every app with a readiness level. You do not need to reach the highest level for every project; the goal is clarity about what is missing.

## P0 - Prototype (same day)
- Runs locally (single command)
- Happy path works end-to-end
- Basic README exists
- No hardcoded secrets

## P1 - Demo-ready (1-3 days)
- Deployed to a real environment (preview is fine)
- Env vars documented in .env.example
- User-facing error states exist
- Basic logging on key actions and failures
- Data model described (even briefly)

## P2 - Internal production (1-2 weeks)
- Auth/permissions strategy decided (or explicitly out of scope)
- Core flows covered by tests OR a scripted smoke test
- Migrations/seed strategy (if DB)
- Observability basics (what to check when it breaks)
- Input validation + rate limiting where needed
- Rollback plan for deploy/migrations

## P3 - External production (ongoing)
- Security review items addressed (OWASP basics)
- SLOs defined (uptime/latency expectations)
- Incident runbook and on-call process
- Backups + disaster recovery drill
- Cost monitoring + performance profiling
