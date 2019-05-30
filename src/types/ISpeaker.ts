import { ISocialLink } from "./ISocialInfo";

export interface ISpeaker {
  id: string;
  name: string;
  smallDescription: string;
  longDescription: string;
  country: string;
  socialLinks: ISocialLink[];
}
