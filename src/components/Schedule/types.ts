import { IEditionActivities } from "../../types/IEditionActivities";

export interface Props {
  className?: string;
  activities: IEditionActivities;
}

export interface State {
  selectedDayName: string;
  selectedTrackName: string;
}
