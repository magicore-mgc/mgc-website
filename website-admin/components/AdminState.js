"use client";

import { useAdminStore } from "@/lib/store";

/** Demo Zustand (client) trên trang quản trị: filter chỉnh đổi danh sách. */
export function AdminStateDemo() {
    const { filter, setFilter, pages } = useAdminStore();

    return (
        <div className="mt-8">
            <label className="text-sm font-medium text-white/80">
                Filter (zustand)
            </label>
            <input
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                placeholder="Lọc theo tiêu đề"
                className="mt-2 w-64 rounded border border-white/20 bg-white/5 px-3 py-2 text-white placeholder:text-white/40"
            />
            <p className="mt-3 text-sm text-white/60">
                Trang đã chọn từ backend:{" "}
                {pages.length ? pages.join(", ") : "đang tải..."}
            </p>
        </div>
    );
}
