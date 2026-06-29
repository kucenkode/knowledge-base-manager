import { ImpactInterface } from "../types/ImpactInterface";
import { create } from "zustand";

export const useImpactStore = create<ImpactInterface>((set) => ({
  selected: null,
  audiences: [],
  pages: [],
  vpcs: [],

  setImpact: (data) =>
    set({
      selected: data.id,
      audiences: data.audiences ?? [],
      pages: data.pages ?? [],
      vpcs: data.vpcs ?? [],
    }),

  clear: () =>
    set({
      selected: null,

      audiences: [],
      pages: [],
      vpcs: [],
    }),
}));
