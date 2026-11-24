import { z } from "zod";

export const CounterUpdateSchema = z.object({
  value: z.number().int().min(0),
});

export const SearchParamsSchema = z.object({
  q: z.string().min(1).max(100).optional(),
});
