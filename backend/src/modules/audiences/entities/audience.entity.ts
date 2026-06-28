import { Interview } from 'src/modules/documents/types/interview.type';
import { STATUSES } from 'src/common/constants/status.constant';

export class Audience {
  constructor(
    public id: string,
    public name: string,
    public docIds: string[] = [],
    public interview: Interview = {
      status: STATUSES.new,
    },
    public vpcIds: string[] = [],
  ) {}
}
