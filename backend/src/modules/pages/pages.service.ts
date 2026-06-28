import { CreatePageDto } from './dto/create-page.dto';
import { storage } from 'src/database/storage';
import { Page } from './entities/page.entity';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PagesService {
  getAllPages() {
    return storage.pages;
  }

  createPage(dto: CreatePageDto) {
    const page = new Page(uuidv4(), dto.name, dto.audienceIds, []);
    storage.pages.push(page);

    return page;
  }
}
