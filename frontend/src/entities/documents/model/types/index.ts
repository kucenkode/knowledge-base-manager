import { DOCUMENT_STATUSES } from "../constants/statuses";
import { DOCUMENT_TYPES } from "../constants/types";

export type DocumentStatuses = keyof typeof DOCUMENT_STATUSES;
export type DocumentTypes = keyof typeof DOCUMENT_TYPES;

export type Document = {
  id: string;
  name: string;
  type: DocumentTypes;
  status: DocumentStatuses;
  createdAt: Date;
};

export type DocumentCardData = {
  name: string;
  status: string;
  active?: boolean;
  onDelete: () => void;
  onClick?: () => void;
};
