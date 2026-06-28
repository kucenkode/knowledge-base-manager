import { STATUSES } from 'src/common/constants/status.constant';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { ImpactService } from '../impact/impact.service';
import { Document } from './entities/document.entity';
import { storage } from '../../database/storage';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DocumentsService {
  constructor(private readonly impactService: ImpactService) {}

  getAllDocuments() {
    return storage.documents;
  }

  createDocument(dto: CreateDocumentDto) {
    if (!dto?.name || !dto?.type) {
      throw new NotFoundException('Одно из полей name или type не заполнено');
    }

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

  findDocumentById(id: string): Document {
    const document = storage.documents.find((document) => document.id === id);

    if (!document) {
      throw new NotFoundException('Документ не найден');
    }

    return document;
  }

  deleteDocument(id: string) {
    const entities = this.impactService.collectImpact(id);
    const report = this.impactService.calculateImpact(entities);

    this.impactService.applyImpact(entities, id);

    storage.documents = storage.documents.filter(
      (document) => document.id !== id,
    );

    return report;
  }
}
