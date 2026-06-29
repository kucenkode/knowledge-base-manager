import type { DocumentTypes } from '../constants/types.constant';
import { DOCUMENT_TYPES } from '../constants/types.constant';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentDto {
  @IsString()
  @IsNotEmpty({ message: 'Название документа не заполнено' })
  name!: string;

  @IsIn(Object.keys(DOCUMENT_TYPES), { message: 'Некорректный тип документа' })
  type!: DocumentTypes;
}
