import { IConference } from "../../types/IConference";

export interface IProps {
  conferenceId: string;
}

export interface IState {
  conferenceData?: IConference;
}
