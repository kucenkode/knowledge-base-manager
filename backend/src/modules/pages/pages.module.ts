import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [PagesController],
  providers: [PagesService],
})
export class PagesModule {}
