# magicore-website

Dự án gồm bốn package chia sẻ nhau:

```
magicore-website/
├── package.json          # root (pnpm workspaces)
├── pnpm-workspace.yaml
├── backend/              # Hono backend (với better-sqlite3, Zod)
├── website-public/       # Next.js site công khai (Tailwind, Zustand, Zod)
├── website-admin/        # Next.js site quản trị (Tailwind, Zustand, Zod)
└── package/              # @magicore/content — package tạo nội dung chung
```

## Chạy

```bash
pnpm install
pnpm dev        # chạy cả backend + website-public + website-admin song song
pnpm build      # build từng package
```
