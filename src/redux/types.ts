import { INotification } from "../types/INotification";

export type ISessionState = {
  session: any | null;
};

export type INotificationsState = {
  notifications: INotification[];
  sponsorNotifications: INotification[];
};

export type IAction = {
  type: string;
  payload: any | null;
};
