import { DocumentTypes } from '../constants/types.constant';

export class CreateDocumentDto {
  name!: string;
  type!: DocumentTypes;
}
