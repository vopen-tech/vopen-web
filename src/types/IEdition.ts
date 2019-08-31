import { IUser } from "./IUser";
import { ISponsor } from "./ISponsor";
import { IEditionTicket } from "./IEditionTicket";

export interface IEdition {
  id: string;
  name: string;
  description: string;
  date: string;
  locationName: string;
  locationFullAddress: string;
  editionTickets: IEditionTicket[];
  organizers: IUser[];
  sponsors: ISponsor[];
  speakers: IUser[];
}
