type SocialIconType = "twitter" | "linkedin" | "facebook" | "instagram" | "youtube";

export interface Props {
  iconType: SocialIconType;
  url: string;
  type?: string;
}
