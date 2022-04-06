import { SetState, GetState } from "zustand";
import { MyState } from "./useStore";

type FilterOptions = {
  minPrice: string;
  maxPrice: string;
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
