import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer, NavLink, Loading } from "../../components";
import {
  Home,
  UserPage,
  BlogPage,
  ConductPage,
  SpeakersPage,
  SponsorsPage,
  ExecutiveTeamPage,
  VirtualConferencePage,
  LoginOidc,
  LogoutOidc,
} from "../../pages";
import { siteService, resourcesService, backendService } from "../../services";
import Constants from "../../constants";

import styles from "./GlobalApp.module.scss";
import { IUser } from "../../types/IUser";

const useLogin: boolean = true;

type IProps = {
  session: any | null;
  showError: boolean;
  dispatch: Function;
};

class GlobalApp extends React.PureComponent<IProps> {
  state: any = {
    conferenceData: undefined,
    legacyGlobalData: undefined,
    team: [] as IUser[],
  };

  async componentDidMount() {
    const legacyGlobalDataPromise = backendService.fetchConference("vopen-global-legacy");
    const editionPromise = backendService.fetchConference("vopen-global-2020");
    const [legacyGlobalData, edition] = await Promise.all([legacyGlobalDataPromise, editionPromise]);
    if (!this.props.session) {
      const session = siteService.getSession();
      if (session) {
        this.props.dispatch({
          type: "LOGIN",
          payload: session,
        });
      }
    }

    const team = edition && edition.organizers ? edition.organizers : ([] as IUser[]);

    this.setState({ legacyGlobalData, team });
  }

  render() {
    const { legacyGlobalData, team } = this.state;

    if (!legacyGlobalData) {
      return <Loading />;
    }

    const Resources = resourcesService.getResources();

    return (
      <Router>
        <div className={styles.globalApp}>
          <Header type="even">
            <NavLink to="/speakers">{Resources.pages.speakers}</NavLink>
            <NavLink to="/sponsors">{Resources.pages.sponsorship}</NavLink>
            <NavLink to="/team">{Resources.pages.team}</NavLink>
            <NavLink to={Constants.countryRequestUrl}>{Resources.buttons.joinUs}</NavLink>
            {/* <NavLink to="/blog" isButton={true}>Blog</NavLink> */}
            <NavLink isButton to="/conference">
              {Resources.pages.virtualConference}
            </NavLink>
            {useLogin && this._getUserComponent(Resources.buttons.login, Resources.buttons.logout)}
          </Header>
          {/* Body */}
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/conduct" component={ConductPage} />
          <Route path="/speakers" render={() => <SpeakersPage speakers={legacyGlobalData.speakers as any} />} />
          <Route path="/sponsors" component={() => <SponsorsPage sponsors={legacyGlobalData.sponsors as any} />} />
          <Route path="/team" component={() => <ExecutiveTeamPage team={team as IUser[]} />} />
          <Route path="/conference" component={VirtualConferencePage} />
          <Route path="/user" component={UserPage} />
          <Route
            path="/login"
            component={() => {
              window.location.href = Constants.loginUrl;
              return null;
            }}
          />
          <Route path="/login-oidc" component={LoginOidc} />
          <Route path="/logout-oidc" component={LogoutOidc} />
          {/* End body */}
          <Footer>
            <NavLink to="/conduct">{Resources.pages.codeOfConduct}</NavLink>
          </Footer>
        </div>
      </Router>
    );
  }

  _getUserComponent(loginText: string, logoutText: string) {
    if (this.props.session && !this.props.showError) {
      return (
        <>
          <NavLink to='/user' className={styles.user}>{`${this.props.session.user.given_name}`}</NavLink>
          <NavLink to="/logout-oidc">{logoutText}</NavLink>
        </>
      );
    } else {
      return <NavLink to="/login">{loginText}</NavLink>;
    }
  }
}

let mapStateToProps = (state: any) => {
  return {
    session: state.session.session,
    showError: state.session.showError
  };
};

export default connect(mapStateToProps)(GlobalApp);
