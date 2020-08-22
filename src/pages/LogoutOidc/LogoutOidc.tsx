import React from "react";
import { Redirect } from "react-router-dom";
import { siteService } from "../../services";
import { Loading } from "../../components";


export default class LogoutOidc extends React.PureComponent {
  state = {
    redirect: false,
  };

  componentDidMount() {
    siteService.removeAccessToken();
    siteService.setUser(null);
    this.setState({ redirect: true });
  }

  render() {
    return this.state.redirect ? 
      <Redirect to="/" /> : 
      <Loading />;
  }
}
