import { IEdition } from "../../types/IEdition";

export interface Props {
  conferenceInfo: IEdition;
  className?: string;
  children: React.ReactNode;
  type?: "odd" | "even";
  session: any | undefined;
}

export interface State {}
