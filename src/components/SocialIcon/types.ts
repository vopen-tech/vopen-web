type SocialIconType = "Twitter" | "Linkedin" | "Facebook" | "Instagram" | "Youtube";

export interface Props {
  iconType: SocialIconType;
  url: string;
  type?: string;
}
