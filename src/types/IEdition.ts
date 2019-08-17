import { IOrganizer } from "./IOrganizer";
import { ISponsor } from "./ISponsor";
import { ITicketInfo } from "./ITicketInfo";

export interface IEdition {
  id: string;
  name: string;
  description: string;
  date: string;
  locationName: string;
  locationFullAddress: string;
  ticketsInfos: ITicketInfo[];
  organizers: IOrganizer[];
  sponsors: ISponsor[];
}
