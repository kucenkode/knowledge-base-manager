import { STATUSES, Statuses } from 'src/common/constants/status.constant';

export class VPC {
  constructor(
    public id: string,
    public name: string,
    public status: Statuses = STATUSES.new,
    public fields = {
      jobs: [],
      pains: [],
      gains: [],
      products: [],
      painRelievers: [],
      gainCreators: [],
    },
  ) {}
}
