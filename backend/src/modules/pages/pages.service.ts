import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { storage } from 'src/database/storage';
import { Page } from './entities/page.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PagesService {
  getAllPages() {
    return storage.pages;
  }

  createPage(dto: CreatePageDto) {
    if (!dto?.name || !dto?.audienceIds) {
      throw new NotFoundException(
        'Одно из полей name или audienceIds не указано',
      );
    }

    const page = new Page(uuidv4(), dto.name, dto.audienceIds, []);
    storage.pages.push(page);

    return page;
  }
}
