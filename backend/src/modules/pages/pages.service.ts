import { BadRequestException, Injectable } from '@nestjs/common';
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
    if (!dto?.name || !dto?.audienceIds?.length) {
      throw new BadRequestException(
        'Одно из полей name или audienceIds не указано',
      );
    }

    const notFoundAudienceIds = dto.audienceIds.filter(
      (audienceId) =>
        !storage.audiences.some((audience) => audience.id === audienceId),
    );

    if (notFoundAudienceIds.length) {
      throw new BadRequestException(
        `Аудитории не найдены: ${notFoundAudienceIds.join(', ')}`,
      );
    }

    const page = new Page(uuidv4(), dto.name, dto.audienceIds, []);
    storage.pages.push(page);

    return page;
  }
}
