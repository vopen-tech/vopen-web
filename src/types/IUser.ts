import { ISocialLink } from "./ISocialInfo";

export interface IUser {
  id: string;
  name: string;
  imageUrl: string;
  socialLinks: ISocialLink[];
  description?: string;
  jobTitle?: string;
  company?: string;
}
