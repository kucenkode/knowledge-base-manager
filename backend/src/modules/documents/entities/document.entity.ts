import { DocumentTypes } from 'src/modules/documents/constants/types.constant';
import { Statuses } from 'src/common/constants/status.constant';

export class Document {
  constructor(
    public id: string,
    public name: string,
    public type: DocumentTypes,
    public status: Statuses,
    public createdAt: Date = new Date(),
  ) {}
}
