import { IUser } from "./IUser";

export interface IEditionActivities {
  days: IDailyActivities[];
}

export interface IDailyActivities {
  name: string;
  tracks: ITrackActivities[];
}

export interface ITrackActivities {
  name: string;
  activities: IEditionActivity[];
}

export interface IEditionActivity {
  id: string;
  title: string;
  description: string;
  presenters: IUser[];
  type: string;
  day: string;
  track: string;
  date: string;
  duration: string;
  tags: string;
}
