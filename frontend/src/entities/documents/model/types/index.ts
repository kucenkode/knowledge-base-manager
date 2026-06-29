export type Document = {
  id: string;
  name: string;
  type: "audience" | "product";
  status: "new" | "applied" | "outdated";
  createdAt: string;
};

export type DocumentCardData = {
  name: string;
  status: string;
  active?: boolean;
  onDelete: () => void;
  onClick?: () => void;
};
