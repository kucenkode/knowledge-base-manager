export const DOCUMENT_TYPES = {
  audience: 'audience',
  product: 'product',
} as const;

export type DocumentTypes = keyof typeof DOCUMENT_TYPES;
