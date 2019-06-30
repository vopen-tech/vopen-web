import { ISocialLink } from "./ISocialInfo";

export interface IOrganizer {
  id: string;
  name: string;
  imageUrl: string;
  socialLinks: ISocialLink[];
}
