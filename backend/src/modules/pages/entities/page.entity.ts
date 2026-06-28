import { STATUSES, Statuses } from 'src/common/constants/status.constant';
import { Section } from './section.entity';

export class Page {
  constructor(
    public id: string,
    public name: string,
    public audienceIds: string[] = [],
    public sections: Section[] = [],
    public status: Statuses = STATUSES.new,
  ) {}
}
