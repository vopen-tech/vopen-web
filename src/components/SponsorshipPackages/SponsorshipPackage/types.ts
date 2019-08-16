export type SponsorshipType = "diamond" | "gold" | "silver" | "digital";

export interface Props {
  sponsorshipType: SponsorshipType;
  className?: string;
}
