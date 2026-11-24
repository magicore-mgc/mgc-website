import { create } from "zustand";

export const usePublicStore = create((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  setCounter: (value) => set({ counter: value }),
}));
