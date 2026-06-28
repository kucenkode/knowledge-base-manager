import { STATUSES } from 'src/common/constants/status.constant';
import { CreateDocumentDto } from './dto/create-document.dto';
import { Document } from './entities/document.entity';
import { storage } from '../../database/storage';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DocumentsService {
  getAllDocuments() {
    return storage.documents;
  }

  createDocument(dto: CreateDocumentDto) {
    const document = new Document(
      uuidv4(),
      dto.name,
      dto.type,
      STATUSES.new,
      new Date(),
    );

    storage.documents.push(document);
    return document;
  }

  findDocumentById(id: string) {
    return storage.documents.find((document) => document.id === id);
  }

  deleteDocument(id: string) {}
}
