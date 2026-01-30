#!/usr/bin/env bash
set -euo pipefail

URL="${APP_URL:-http://localhost:3000}"
echo "Smoke testing ${URL}/api/health ..."
curl -fsS "${URL}/api/health" | cat
echo ""
echo "OK"
