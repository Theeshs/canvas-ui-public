import { UserEducation } from './education';
import { UserExperience } from './experience';
import { UserProjects } from './projects';

export interface UserProfile {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  dob: string;
  github_username: string;
  description: string;
  mobile_number: number;
  address_block: string;
  address_street: string;
  recidential_country: string;
  nationality: string;
  experiences: UserExperience[];
  educations: UserEducation[];
  projects: UserProjects[];
}
