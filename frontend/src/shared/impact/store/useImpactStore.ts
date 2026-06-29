import { IMPACT_INITIAL_STATE } from "../constants";
import { ImpactInterface } from "../types";
import { create } from "zustand";

export const useImpactStore = create<ImpactInterface>((set) => ({
  ...IMPACT_INITIAL_STATE,

  setImpact: ({ id, audiences, pages, vpcs }) =>
    set({
      selected: id,
      audiences: audiences ?? [],
      pages: pages ?? [],
      vpcs: vpcs ?? [],
    }),

  clear: () => set(IMPACT_INITIAL_STATE),
}));
