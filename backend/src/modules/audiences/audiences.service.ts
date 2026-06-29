import { BadRequestException, Injectable } from '@nestjs/common';
import { STATUSES } from 'src/common/constants/status.constant';
import { CreateAudienceDto } from './dto/create-audience.dto';
import { Audience } from './entities/audience.entity';
import { storage } from 'src/database/storage';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AudienceService {
  getAllAudiences() {
    return storage.audiences;
  }

  createAudience(dto: CreateAudienceDto) {
    if (!dto?.name || !dto?.docIds?.length) {
      throw new BadRequestException('Одно из полей name или docIds не указано');
    }

    const notFoundDocIds = dto.docIds.filter(
      (docId) => !storage.documents.some((doc) => doc.id === docId),
    );

    if (notFoundDocIds.length) {
      throw new BadRequestException(
        `Документы не найдены: ${notFoundDocIds.join(', ')}`,
      );
    }

    const audience = new Audience(
      uuidv4(),
      dto.name,
      dto.docIds,
      { status: STATUSES.new },
      [],
    );

    storage.audiences.push(audience);
    return audience;
  }
}
