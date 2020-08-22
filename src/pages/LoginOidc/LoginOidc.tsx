import React from "react";
import { Redirect } from "react-router-dom";
import { Props } from "./types";
import { siteService } from "../../services";
import { Loading } from "../../components";

export default class LoginOidc extends React.PureComponent<Props, any> {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this._setSession();
  }

  render() {
    return this.state.redirect ? 
      <Redirect to="/" /> : 
      <Loading />;
  }

  _setSession() {
    const queryString = this.props.location.search;
    const params = new URLSearchParams(queryString);
    const idToken = params.get("id_token");

    if (idToken) {
      siteService.setAccessToken(idToken);
      this._setUser(idToken);
    }
  }

  _setUser(token: string) {
    if (token) {
      try {
        var user = JSON.parse(atob(token.split(".")[1]));
        siteService.setUser(user);
      } catch (error) {
        console.log(JSON.stringify(error));
      }

      this.setState({ redirect: true });
    }
  }
}
