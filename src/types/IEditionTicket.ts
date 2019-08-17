export interface IEditionTicket {
  name: string;
  price: string;
  benefits: string[];
  startDate: string;
  endDate: string;
  buyLinks: IBuyLink[];
}

export interface IBuyLink {
  label: string;
  url: string;
}
