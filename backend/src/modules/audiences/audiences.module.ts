import { AudienceController } from './audiences.controller';
import { AudienceService } from './audiences.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AudienceController],
  providers: [AudienceService],
})
export class AudiencesModule {}
