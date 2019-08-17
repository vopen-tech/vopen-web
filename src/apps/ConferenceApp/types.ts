import { IEdition } from "../../types/IEdition";

export interface IProps {
  conferenceId: string;
}

export interface IState {
  conferenceData?: IEdition;
  globalData?: IEdition;
}
