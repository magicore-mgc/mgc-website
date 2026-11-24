# backend

Backend của dự án (Hono + better-sqlite3 + Zod), chạy từ thư mục `backend/`.

```bash
pnpm --filter backend dev
# hoặc: cd backend && pnpm dev
```

Endpoints:
- `GET /api/health` — health check.
- `GET /api/site` — site info + design tokens (từ `@magicore/content`).
- `GET /api/pages` — danh sách trang từ `@magicore/content` + counters SQLite.
- `POST /api/pages/counter` — validate body bằng Zod, ghi counters vào SQLite.
- `GET /api/content` — thông tin chung từ `@magicore/content`.

CORS: cho phép `http://localhost:3001` (website-public) và `http://localhost:3002` (website-admin).
