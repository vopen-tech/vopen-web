import React from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { IProps } from "./types";
import { Loading } from "../../components";
import { siteService } from "../../services";


class LogoutOidc extends React.PureComponent<IProps> {
  state = {
    redirect: false,
  };

  componentDidMount() {
    siteService.setSession(null);
    this.props.dispatch({type: 'LOGOUT'});
    this.setState({ redirect: true });
  }

  render() {
    return this.state.redirect ? 
      <Redirect to="/" /> : 
      <Loading />;
  }
}

export default connect()(LogoutOidc);
