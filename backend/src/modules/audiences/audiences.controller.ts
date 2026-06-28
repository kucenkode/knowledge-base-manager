import { CreateAudienceDto } from './dto/create-audience.dto';
import { Controller, Get, Post } from '@nestjs/common';
import { AudienceService } from './audiences.service';

@Controller('audiences')
export class AudienceController {
  constructor(private readonly audienceService: AudienceService) {}

  @Get()
  getAllAudiences() {
    return this.audienceService.getAllAudiences();
  }

  @Post()
  createAudience(dto: CreateAudienceDto) {
    return this.audienceService.createAudience(dto);
  }
}
