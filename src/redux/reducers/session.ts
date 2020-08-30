import { ISessionState, IAction } from "../types";

const initialState: ISessionState = {
  session: null,
};

export default (state: ISessionState = initialState, action: IAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        session: action.payload,
      };
    case "LOGIN_FAILED":
      return {
        ...initialState,
        session: action.payload,
        showError: true,
      };
    case "LOGIN_FAILED_MESSAGE_SHOWN":
    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};
