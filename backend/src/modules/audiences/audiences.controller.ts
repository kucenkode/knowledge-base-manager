import { CreateAudienceDto } from './dto/create-audience.dto';
import { Controller, Get, Post } from '@nestjs/common';
import { AudienceService } from './audiences.service';

@Controller('audiences')
export class AudienceController {
  constructor(private readonly audienceService: AudienceService) {}

  @Get()
  getAudiences() {
    return this.audienceService.getAudiences();
  }

  @Post()
  createAudience(dto: CreateAudienceDto) {
    return this.audienceService.createAudience(dto);
  }
}
