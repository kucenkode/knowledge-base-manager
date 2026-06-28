import { Audience } from '../../audiences/entities/audience.entity';
import { Document } from '../../documents/entities/document.entity';
import { Page } from '../../pages/entities/page.entity';
import { VPC } from '../../vpcs/entities/vpc.entity';

export type ImpactReport = {
  document: {
    id: string;
    name: string;
  };

  affectedAudiences: {
    id: string;
    name: string;
  }[];

  affectedVpcs: string[];

  affectedPages: {
    id: string;
    name: string;
    sections: string[];
  }[];
};

export type ImpactEntities = {
  document: Document;
  affectedAudiences: Audience[];
  affectedVpcs: VPC[];
  affectedPages: Page[];
};
