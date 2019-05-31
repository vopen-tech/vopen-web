import { ISpeaker } from "./ISpeaker";

export enum ActivityType {
  Lunch,
  Break,
  AfterParty,
  Opening,
  Closing,
  Talk,
  Workshop,
  Keynote,
  DiscussionPanel
}

export interface IActivity {
  startTime: string;
  endTime: string;
  title: string;
  description: string;
  speakers: ISpeaker[];
  tags: string[];
  type: ActivityType;
}

export interface ITrack {
  label: string;
  description?: string;
  activities: IActivity[];
}

export interface IScheduleDay {
  label: string;
  description?: string;
  tracks: ITrack[];
}

export interface ISchedule {
  days: IScheduleDay[];
}
