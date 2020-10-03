import { INotificationsState, IAction } from "../types";

const initialState: INotificationsState = {
  notifications: [],
  sponsorNotifications: []
};

export default (state: INotificationsState = initialState, action: IAction) => {
  switch (action.type) {
    case "SPONSOR_NOTIFICATIONS_UPDATED":
      return {
        ...state,
        sponsorNotifications: action.payload,
      };
    case "NOTIFICATIONS_UPDATED":
      return {
        ...state,
        notifications: action.payload,
      };

    default:
      return state;
  }
};
