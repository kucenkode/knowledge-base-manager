import { Statuses } from 'src/common/constants/status.constant';

export type Interview = {
  status: Statuses;
  content?: string;
};
