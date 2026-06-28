import { Document } from '../modules/documents/entities/document.entity';
import { Audience } from '../modules/audiences/entities/audience.entity';
import { Section } from '../modules/pages/entities/section.entity';
import { VPC } from '../modules/audiences/entities/vpc.entity';
import { STATUSES } from '../common/constants/status.constant';
import { Page } from '../modules/pages/entities/page.entity';
import { v4 as uuidv4 } from 'uuid';
import { storage } from './storage';

export const applyDataSeeds = () => {
  // Documents
  const audienceDoc = new Document(
    uuidv4(),
    'Audience research',
    'audience',
    STATUSES.new,
    new Date(),
  );

  const productDoc = new Document(
    uuidv4(),
    'Product brief',
    'product',
    STATUSES.new,
    new Date(),
  );

  const anotherDoc = new Document(
    uuidv4(),
    'Customer interviews',
    'audience',
    STATUSES.new,
    new Date(),
  );

  storage.documents.push(audienceDoc, productDoc, anotherDoc);

  // VPC
  const vpc = new VPC(uuidv4(), 'B2B Marketing VPC');
  storage.vpcs.push(vpc);

  // Audience
  const audience = new Audience(
    uuidv4(),
    'B2B marketers',
    [audienceDoc.id, productDoc.id],
    {
      status: STATUSES.new,
    },
    [vpc.id],
  );

  const secondAudience = new Audience(
    uuidv4(),
    'Startup founders',
    [anotherDoc.id],
    {
      status: STATUSES.new,
    },
    [],
  );

  storage.audiences.push(audience, secondAudience);

  // Pages + Sections
  const section = new Section('Hero section', [vpc.id]);
  const ctaSection = new Section('CTA section', [vpc.id]);

  const page = new Page(
    uuidv4(),
    'Landing page',
    [audience.id],
    [section, ctaSection],
  );

  const secondPage = new Page(
    uuidv4(),
    'Product page',
    [secondAudience.id],
    [],
  );

  storage.pages.push(page, secondPage);
};
