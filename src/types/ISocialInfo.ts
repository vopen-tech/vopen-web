type SocialTypes = "Facebook" | "Twitter" | "Instagram" | "Youtube" | "Linkedin" | "Email";

export interface ISocialLink {
  type: SocialTypes;
  url: string;
}
