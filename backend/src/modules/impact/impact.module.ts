import { ImpactController } from './impact.controller';
import { ImpactService } from './impact.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ImpactController],
  providers: [ImpactService],
  exports: [ImpactService],
})
export class ImpactModule {}
