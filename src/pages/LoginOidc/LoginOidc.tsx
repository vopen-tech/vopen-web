import React from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { IProps } from "./types";
import { Loading } from "../../components";
import { siteService } from "../../services";

class LoginOidc extends React.PureComponent<IProps> {
  state = {
    redirect: false,
    path: '/'
  };

  componentDidMount() {
    this._setSession();
  }

  render() {
    return this.state.redirect ? 
      <Redirect to={this.state.path} /> :
      <Loading />;
  }

  _setSession() {
    const queryString = this.props.location.search;
    const params = new URLSearchParams(queryString);
    const idToken = params.get("id_token");
    const error = params.get("error");
    let path = '/';

    if(error || !idToken) {
      const errorDescription = params.get("error_description");
      this._handleError(error, errorDescription);
    } else {
      this._handleSuccess(idToken);
      path = '/user';
    }

    this.setState({ 
      redirect: true,
      path
    });
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
