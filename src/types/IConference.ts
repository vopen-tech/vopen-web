import { IOrganizer } from "./IOrganizer";
import { ISponsor } from "./ISponsor";

export interface IConference {
  id: string;
  name: string;
  editions: IEdition[];
}

export interface IEdition {
  id: string;
  name: string;
  description: string;
  date: string;
  locationName: string;
  locationFullAddress: string;
  ticketType: string;
  ticketPrice: string;
  ticketStartDate: string;
  ticketEndDate: string;
  ticketsInfo: {
    ticketsType: string;
    isTicketSaleOpen: boolean;
  };
  organizers: IOrganizer[];
  sponsors: ISponsor[];
}
