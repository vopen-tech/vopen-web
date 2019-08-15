import { ISocialLink } from "./ISocialInfo";

export interface IOrganizer {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
  socialLinks: ISocialLink[];
}
