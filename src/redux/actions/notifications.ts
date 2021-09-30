// import { siteService } from "../../services";

export const loadUserProfile = () => {
  // const session = siteService.getSession();

  return {
    type: "LOGIN",
    // payload: session,
    payload: {},
  };
};
