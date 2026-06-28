import { ImpactReport, ImpactEntities } from './types/impact.types';
import { STATUSES } from 'src/common/constants/status.constant';
import { Injectable, NotFoundException } from '@nestjs/common';
import { storage } from '../../database/storage';

@Injectable()
export class ImpactService {
  private getImpactEntities(documentId: string): ImpactEntities {
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
      document,
      affectedAudiences,
      affectedVpcs,
      affectedPages,
    };
  }

  calculateImpact(documentId: string): ImpactReport {
    const { document, affectedAudiences, affectedVpcs, affectedPages } =
      this.getImpactEntities(documentId);

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

  applyImpact(documentId: string) {
    const { affectedAudiences, affectedVpcs, affectedPages } =
      this.getImpactEntities(documentId);

    affectedAudiences.forEach((audience) => {
      audience.interview.status = STATUSES.outdated;
    });

    affectedVpcs.forEach((vpc) => {
      vpc.status = STATUSES.outdated;
    });

    affectedPages.forEach((page) => {
      page.sections.forEach((section) => {
        section.status = STATUSES.outdated;
      });
    });
  }
}
