import React from "react";
import { Redirect } from "react-router-dom";
import { siteService } from "../../services";

export default class LogoutOidc extends React.PureComponent {

  componentDidMount() {
    debugger;
    siteService.removeAccessToken();
    siteService.setUser(null);
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}
