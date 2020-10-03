import { IEdition } from "../../types/IEdition";
import { INotification } from "../../types/INotification";

export interface IProps {
  conferenceId: string;
  session: any;
  notifications: INotification[]
}

export interface IState {
  conferenceData?: IEdition;
  globalData?: IEdition;
}
