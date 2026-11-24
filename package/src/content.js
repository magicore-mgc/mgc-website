import { SITE } from "./types.js";

const PAGES = [
  {
    id: "home",
    path: "/",
    heading: "magicore — Sản phẩm website chia sẻ nội dung",
    subheading: "Website công khai và quản trị, dùng nền tảng: Hono backend, Next.js, Tailwind CSS, Zustand, Zod.",
    ctaLabel: "Tìm hiểu thêm",
    ctaHref: "/admin",
    badge: "Tech: Hono + Next.js + Tailwind + Zod + Zustand + SQLite",
  },
  {
    id: "about",
    path: "/about",
    heading: "Về chúng tôi",
    subheading: "Dự án vẫn đang được phát triển; nội dung chung được tạo bởi @magicore/content.",
  },
];

/** Tạo nội dung cho một trang theo id (hoặc dùng bản đồ trang mặc định). */
export function generatePageContent(id, overrides = {}) {
  const base = PAGES.find((p) => p.id === id) ?? PAGES[0];
  return {
    id: base.id,
    title: `${base.heading} | ${SITE.siteName}`,
    description: SITE.description,
    heading: base.heading,
    subheading: base.subheading,
    ctaLabel: base.ctaLabel,
    ctaHref: base.ctaHref,
    badge: base.badge,
    ...overrides,
  };
}

/** Tạo danh sách trang chung (được dùng bởi backend /api/pages và website-admin). */
export function generatePageList() {
  return PAGES.map((p) => ({
    id: p.id,
    path: p.path,
    content: generatePageContent(p.id),
    updatedAt: new Date().toISOString(),
  }));
}
