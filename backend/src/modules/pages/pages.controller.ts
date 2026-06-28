import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { PagesService } from './pages.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  getAllPages() {
    return this.pagesService.getAllPages();
  }

  @Post()
  createPage(@Body() dto: CreatePageDto) {
    return this.pagesService.createPage(dto);
  }
}
