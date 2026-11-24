import { create } from "zustand";

export const useAdminStore = create((set) => ({
  filter: "",
  setFilter: (value) => set({ filter: value }),
  pages: [],
  setPages: (value) => set({ pages: value }),
}));
