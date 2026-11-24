"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { generatePageContent } from "@magicore/content";
import { AdminStateDemo } from "@/components/AdminState";
import { useAdminStore } from "@/lib/store";

const PageItemSchema = z.object({
  id: z.string(),
  path: z.string(),
  content: z.object({
    title: z.string(),
    heading: z.string(),
    subheading: z.string().optional(),
  }),
});

const PagesListSchema = z.object({
  pages: z.array(PageItemSchema),
});

export default function AdminPage() {
  const [pages, setPages] = useState([]);
  const { setPages: setAdminPages, filter } = useAdminStore();
  const banner = generatePageContent("home").badge;

  useEffect(() => {
    fetch("http://localhost:3000/api/pages")
      .then((res) => res.json())
      .then((data) => {
        const parsed = PagesListSchema.safeParse(data);
        if (parsed.success) {
          setPages(parsed.data.pages);
          setAdminPages(parsed.data.pages.map((p) => p.id));
        }
      })
      .catch((err) => console.warn("[website-admin] fetch pages failed", err));
  }, [setAdminPages]);

  const filtered = pages.filter((p) => !filter || p.content.heading.includes(filter));

  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold">Trang quản trị</h1>
      {banner && <p className="mt-2 text-sm text-white/70">{banner}</p>}

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Danh sách trang (từ backend /api/pages)</h2>
        <ul className="mt-3 space-y-2">
          {filtered.map((p) => (
            <li key={p.id} className="rounded border border-white/10 px-4 py-2">
              <span className="font-medium">{p.content.heading}</span>
              <span className="ml-3 text-sm text-white/60">{p.path}</span>
            </li>
          ))}
        </ul>
      </div>

      <AdminStateDemo />
    </main>
  );
}
