export const STATUSES = {
  applied: 'applied',
  outdated: 'outdated',
  new: 'new',
} as const;

export type Statuses = keyof typeof STATUSES;
