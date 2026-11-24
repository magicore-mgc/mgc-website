import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { openDb } from "./db/sqlite.js";
import { contentRoute } from "./routes/content.js";
import { healthRoute } from "./routes/health.js";
import { pagesRoute } from "./routes/pages.js";
import { siteRoute } from "./routes/site.js";

const PORT = Number(process.env.PORT ?? 3000);

// Tạo/migrate cơ sở dữ liệu khi boot.
openDb();

const app = new Hono();

app.use(
  cors({
    origin: [
      process.env.PUBLIC_ORIGIN ?? "http://localhost:3001",
      process.env.ADMIN_ORIGIN ?? "http://localhost:3002",
    ],
    allowMethods: ["GET", "POST", "OPTIONS"],
  })
);

app.onError((err, c) => {
  console.error("[backend]", err);
  return c.json({ error: "internal_server_error" }, 500);
});

app.route("/api/health", healthRoute);
app.route("/api/site", siteRoute);
app.route("/api/pages", pagesRoute);
app.route("/api/content", contentRoute);

serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`[backend] listening on http://localhost:${PORT}`);
  console.log("[backend] /api/health     -> /api/health");
  console.log("[backend] /api/site       -> /api/site");
  console.log("[backend] /api/pages      -> /api/pages (GET/POST)");
  console.log("[backend] /api/content    -> /api/content");
});
