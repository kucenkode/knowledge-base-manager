import { DocumentsController } from './documents.controller';
import { ImpactModule } from '../impact/impact.module';
import { DocumentsService } from './documents.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [ImpactModule],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
