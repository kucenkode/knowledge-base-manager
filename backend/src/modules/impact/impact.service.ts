import { STATUSES } from 'src/common/constants/status.constant';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ImpactReport } from './types/impact.types';
import { storage } from '../../database/storage';

@Injectable()
export class ImpactService {
  collectImpact(documentId: string): ImpactReport {
    const document = storage.documents.find(
      (document) => document.id === documentId,
    );

    if (!document) {
      throw new NotFoundException('Документ не найден');
    }

    const affectedAudiences = storage.audiences.filter((audience) =>
      audience.docIds.includes(documentId),
    );

    const affectedVpcIds = new Set(
      affectedAudiences.flatMap((audience) => audience.vpcIds),
    );

    const affectedVpcs = storage.vpcs.filter((vpc) =>
      affectedVpcIds.has(vpc.id),
    );

    const affectedAudienceIds = new Set(
      affectedAudiences.map((audience) => audience.id),
    );

    const affectedPages = storage.pages.filter((page) =>
      page.audienceIds.some((id) => affectedAudienceIds.has(id)),
    );

    return {
      document: {
        id: document.id,
        name: document.name,
      },

      affectedAudiences: affectedAudiences.map((audience) => ({
        id: audience.id,
        name: audience.name,
      })),

      affectedVpcs: affectedVpcs.map((vpc) => vpc.id),

      affectedPages: affectedPages.map((page) => ({
        id: page.id,
        name: page.name,
        sections: page.sections.map((section) => section.name),
      })),
    };
  }

  applyImpact(impact: ImpactReport) {
    impact.affectedAudiences.forEach(({ id }) => {
      const audience = storage.audiences.find((item) => item.id === id);

      if (!audience) return;

      audience.interview.status = STATUSES.outdated;
    });

    impact.affectedVpcs.forEach((id) => {
      const vpc = storage.vpcs.find((item) => item.id === id);

      if (vpc) {
        vpc.status = STATUSES.outdated;
      }
    });

    impact.affectedPages.forEach(({ id }) => {
      const page = storage.pages.find((item) => item.id === id);

      page?.sections.forEach((section) => {
        section.status = STATUSES.outdated;
      });
    });
  }
}
