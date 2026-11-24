import { z } from "zod";

export const CounterPatchSchema = z.object({
  value: z.number().int().min(0),
});
