import { Hono } from "hono";
import { SITE, tokens } from "@magicore/content";

const app = new Hono();

/** GET /api/site — Thông tin site (SITE) + Design Tokens (từ @magicore/content), để cả 2 sites lấy config qua API. */
app.get("/", (c) => c.json({ site: SITE, tokens }));

export default app;
