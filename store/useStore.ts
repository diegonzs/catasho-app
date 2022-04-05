import create from "zustand";
import { createSearchSlice, SearchSlice } from "./createSearchSlice";

export type MyState = SearchSlice;

export const useStore = create<MyState>((set, get) => ({
  ...createSearchSlice(set, get),
}));
