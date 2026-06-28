import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
