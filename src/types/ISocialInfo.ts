export enum SocialTypes {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail
}

export interface ISocialLink {
  type: SocialTypes;
  url: string;
}
