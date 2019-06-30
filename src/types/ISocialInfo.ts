type SocialTypes = "facebook" | "twitter" | "instagram" | "youtube" | "linkedin" | "email";

export interface ISocialLink {
  type: SocialTypes;
  url: string;
}
