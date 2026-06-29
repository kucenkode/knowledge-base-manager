export type ImpactInterface = {
  selected: string | null;
  audiences: string[];
  pages: string[];
  vpcs: string[];

  setImpact: (data: any) => void;
  clear: () => void;
};
