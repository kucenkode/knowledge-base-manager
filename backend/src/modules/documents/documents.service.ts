import { STATUSES } from 'src/common/constants/status.constant';
import { CreateDocumentDto } from './dto/create-document.dto';
import { Document } from './entities/document.entity';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DocumentsService {
  private documents: Document[] = [];

  getAllDocuments() {
    return this.documents;
  }

  createDocument(dto: CreateDocumentDto) {
    const document = new Document(
      uuidv4(),
      dto.name,
      dto.type,
      STATUSES.new,
      new Date(),
    );

    this.documents.push(document);
    return document;
  }

  findDocumentById(id: string) {
    return this.documents.find((document) => document.id === id);
  }

  deleteDocument(id: string) {}
}
