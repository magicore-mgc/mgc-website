import { readFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import Database from "better-sqlite3";

const dbPath = process.env.DATABASE_PATH ?? new URL("../data/app.sqlite", import.meta.url).pathname;
mkdirSync(dirname(dbPath), { recursive: true });

const db = new Database(dbPath);
db.exec(readFileSync(new URL("./schema.sql", import.meta.url), "utf8"));
db.pragma("journal_mode = WAL");

export default db;
export { db as openDb };
