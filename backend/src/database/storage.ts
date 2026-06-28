import { Document } from 'src/modules/documents/entities/document.entity';
import { Audience } from 'src/modules/audiences/entities/audience.entity';
import { Page } from 'src/modules/pages/entities/page.entity';
import { VPC } from 'src/modules/vpcs/entities/vpc.entity';

export const storage = {
  documents: [] as Document[],
  audiences: [] as Audience[],
  vpcs: [] as VPC[],
  pages: [] as Page[],
};
