import { Hono } from "hono";
import { generatePageList, SITE } from "@magicore/content";

const app = new Hono();

/** GET /api/content — nội dung chung từ package @magicore/content. */
app.get("/", (c) => c.json({ site: SITE, pages: generatePageList() }));

export default app;
