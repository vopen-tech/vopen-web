import React from "react";
import { Redirect } from "react-router-dom";
import { Props } from "./types";
import { siteService } from "../../services";

export default class LoginOidc extends React.PureComponent<Props, any> {
  componentDidMount() {
    this._setSession();
  }

  render() {
    return <Redirect to="/" />;
  }

  _setSession() {
    const queryString = this.props.location.search;
    const params = new URLSearchParams(queryString);
    const token = params.get("token");

    if (token) {
      siteService.setAccessToken(token);
      this._setUser(token);
    }
  }

  _setUser(token: string) {
    if (token) {
      try {
        var user = JSON.parse(atob(token.split(".")[1]));
        siteService.setUser(user);
      } catch (error) {
        // ignore
      }
    }
  }
}
