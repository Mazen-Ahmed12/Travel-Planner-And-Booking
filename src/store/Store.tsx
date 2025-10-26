// src/store/useFiltersStore.ts
import { create } from "zustand";

type ViewMode = "grid" | "list";

type FiltersState = {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;

  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
};

export const useFiltersStore = create<FiltersState>((set) => ({
  viewMode: "grid",
  setViewMode: (mode) => set({ viewMode: mode }),

  priceRange: [500, 3000],
  setPriceRange: (range) => set({ priceRange: range }),
}));
