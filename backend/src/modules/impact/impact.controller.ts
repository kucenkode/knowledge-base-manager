import { Controller, Get, Param } from '@nestjs/common';
import { ImpactService } from './impact.service';

@Controller('impact')
export class ImpactController {
  constructor(private readonly impactService: ImpactService) {}

  @Get(':docId')
  getImpact(@Param('docId') id: string) {
    return this.impactService.calculateImpact(id);
  }
}
