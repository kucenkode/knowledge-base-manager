import { DocumentsModule } from './modules/documents/documents.module';
import { AudiencesModule } from './modules/audiences/audiences.module';
import { ImpactModule } from './modules/impact/impact.module';
import { PagesModule } from './modules/pages/pages.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    DocumentsModule,
    AudiencesModule,
    ImpactModule,
    PagesModule,
  ],
})
export class AppModule {}
