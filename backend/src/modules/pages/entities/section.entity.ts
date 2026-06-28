import { STATUSES, Statuses } from 'src/common/constants/status.constant';

export class Section {
  constructor(
    public name: string,
    public vpcIds: string[] = [],
    public status: Statuses = STATUSES.new,
  ) {}
}
