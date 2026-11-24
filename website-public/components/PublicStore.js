"use client";

import { usePublicStore } from "@/lib/store";
import { CounterPatchSchema } from "@/lib/schema";

/** Component demo Zustand (client): hiển thị + tăng counter; validate input bằng Zod. */
export function PublicStoreDemo() {
  const { counter, increment, setCounter } = usePublicStore();

  const handleSet = (event) => {
    const raw = Number(event.target.value);
    const parsed = CounterPatchSchema.safeParse({ value: raw });
    setCounter(parsed.success ? parsed.data.value : 0);
  };

  return (
    <div className="mt-10 flex items-center gap-4">
      <button
        type="button"
        onClick={increment}
        className="rounded-md bg-primary px-4 py-2 font-medium text-primary-fg shadow transition hover:opacity-90"
      >
        Tăng counter
      </button>
      <label className="flex items-center gap-2 text-sm text-muted">
        Đặt giá trị
        <input
          type="number"
          min={0}
          value={counter}
          onChange={handleSet}
          className="w-24 rounded-md border border-border px-2 py-1"
        />
      </label>
      <span className="text-sm font-semibold">Giá trị hiện tại: {counter}</span>
    </div>
  );
}
