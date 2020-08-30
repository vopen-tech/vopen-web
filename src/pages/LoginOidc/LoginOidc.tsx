import React from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { IProps } from "./types";
import { Loading } from "../../components";
import { siteService } from "../../services";

class LoginOidc extends React.PureComponent<IProps> {
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
    const error = params.get("error");

    if(error || !idToken) {
      const errorDescription = params.get("error_description");
      this._handleError(error, errorDescription);
    } else {
      this._handleSuccess(idToken);
    }

    this.setState({ redirect: true });
  }

  _handleError(error: string | null, errorDescription: string | null) {
    this.props.dispatch({
      type: 'LOGIN_FAILED',
      payload: {
        error,
        errorDescription
      }
    });
  }

  _handleSuccess(idToken: string) {
    const user = JSON.parse(atob(idToken.split(".")[1]));
    const session ={
      user,
      idToken,
      isNew: true // from claims
    };

    siteService.setSession(session);

    this.props.dispatch({
      type: 'LOGIN',
      payload: session
    });
  }
}

export default connect()(LoginOidc);
