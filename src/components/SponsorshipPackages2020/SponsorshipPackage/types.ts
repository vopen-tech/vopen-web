export type SponsorshipType = "gold" | "silver" | "supporter";

export interface Props {
  sponsorshipType: SponsorshipType;
  className?: string;
}
