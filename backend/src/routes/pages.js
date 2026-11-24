import { Hono } from "hono";
import { zodValidator } from "@hono/zod-validator";
import { generatePageList } from "@magicore/content";
import { CounterUpdateSchema } from "../lib/validate.js";
import db from "../db/sqlite.js";

const app = new Hono();

/** GET /api/pages — các trang chung được tạo bởi @magicore/content + dữ liệu counters từ SQLite. */
app.get("/", (c) => {
  const counters = db.prepare("SELECT * FROM counters ORDER BY id").all();
  return c.json({ pages: generatePageList(), counters });
});

/** POST /api/pages/counter — validate bằng Zod rồi mới ghi vào SQLite. */
app.post("/counter", zodValidator("json", CounterUpdateSchema), (c) => {
  const { value } = c.req.valid("json");
  const stmt = db.prepare(
    "INSERT INTO counters (id, value) VALUES ('main', ?) " +
      "ON CONFLICT(id) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP"
  );
  stmt.run(value);
  const row = db.prepare("SELECT value FROM counters WHERE id = 'main'").get();
  return c.json({ value: row?.value ?? value });
});

export default app;
