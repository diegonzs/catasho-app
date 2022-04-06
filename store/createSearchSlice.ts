import { SetState, GetState } from "zustand";
import { MyState } from "./useStore";

type FilterOptions = {
  minPrice: string;
  maxPrice: string;
  sortBy: "Precio mas alto" | "Precio mas bajo";
  delivery: "Delivery" | "Pick Up";
  offer: "Descuento" | "Delivery Gratis";
};
export interface SearchSlice {
  searchValue: string;
  setSearchValue: (value: string) => void;
  isFilterOpen: boolean;
  toggleFilterOpen: () => void;
  filterOptions: FilterOptions;
  updateFilterOptions: (value: Partial<FilterOptions>) => void;
}

export const createSearchSlice = (
  set: SetState<MyState>,
  get: GetState<MyState>
): SearchSlice => ({
  searchValue: "",
  filterOptions: {
    sortBy: "Precio mas alto",
    delivery: "Delivery",
    offer: "Delivery Gratis",
    minPrice: "",
    maxPrice: "",
  },
  toggleFilterOpen: () =>
    set((prev) => ({
      isFilterOpen: !prev.isFilterOpen,
    })),
  isFilterOpen: false,
  setSearchValue: (value) =>
    set({
      searchValue: value,
    }),
  updateFilterOptions: (value) => {
    set((prev) => ({
      filterOptions: {
        ...prev.filterOptions,
        ...value,
      },
    }));
  },
});
