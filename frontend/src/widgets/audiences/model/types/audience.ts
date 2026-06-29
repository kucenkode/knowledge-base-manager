import { Interview } from "../../index";

export type Audience = {
  id: string;
  name: string;
  docIds: string[];
  interview: Interview;
  vpcIds: string[];

  vpcs?: {
    id: string;
    name: string;
  }[];

  fields: string[];
};
