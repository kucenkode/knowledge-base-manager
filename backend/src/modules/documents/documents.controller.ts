import { Controller, Body, Get, Post, Delete, Param } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  getAllDocuments() {
    return this.documentsService.getAllDocuments();
  }

  @Post()
  createDocument(@Body() document: CreateDocumentDto) {
    return this.documentsService.createDocument(document);
  }

  @Delete(':id')
  deleteDocument(@Param('id') id: string) {
    return this.documentsService.deleteDocument(id);
  }
}
