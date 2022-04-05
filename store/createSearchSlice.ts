import { SetState, GetState } from "zustand";
import { MyState } from "./useStore";

export interface SearchSlice {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const createSearchSlice = (
  set: SetState<MyState>,
  get: GetState<MyState>
): SearchSlice => ({
  searchValue: "",
  setSearchValue: (value) =>
    set({
      searchValue: value,
    }),
});
