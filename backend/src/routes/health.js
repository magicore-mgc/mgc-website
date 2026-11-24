import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ status: "ok", time: new Date().toISOString() }));

export default app;
