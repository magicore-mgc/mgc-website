-- Bảng counters: dữ liệu thử nghiệm cho API /api/pages/counter (Zod validate + SQLite).
CREATE TABLE IF NOT EXISTS counters (
  id TEXT PRIMARY KEY,
  value INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
