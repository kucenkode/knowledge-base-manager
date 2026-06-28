import { STATUSES } from 'src/common/constants/status.constant';
import { CreateAudienceDto } from './dto/create-audience.dto';
import { Audience } from './entities/audience.entity';
import { storage } from 'src/database/storage';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AudienceService {
  getAudiences() {
    return storage.audiences;
  }

  createAudience(dto: CreateAudienceDto) {
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
