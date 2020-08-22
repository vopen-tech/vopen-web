import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer, NavLink, PageSection, Banner, About, History, CtaButtons, Loading, CountDown } from "../../components";
import { FlagArgentina, FlagChile, FlagMexico, FlagUruguay } from "../../components/SVGs";
import {
  BlogPage,
  ConductPage,
  SpeakersPage,
  SponsorsPage,
  ExecutiveTeamPage,
  VirtualConferencePage,
  LoginOidc,
  LogoutOidc } from "../../pages";
import { IEdition } from "../../types/IEdition";
import { siteService, resourcesService, backendService } from "../../services";
import Constants from "../../constants";

import styles from "./GlobalApp.module.scss";
import { IUser } from "../../types/IUser";

const loginUrl: string = "https://vopentechweb.b2clogin.com/vopentechweb.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signinsignup&client_id=2bb15913-064f-4bd9-8850-04d5b2a96869&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin-oidc&scope=openid&response_type=id_token&prompt=login&response_mode=query";
const useLogin: boolean = true;

const Home: React.SFC<any> = ({ conferenceInfo }: { conferenceInfo: IEdition }) => {
  const Resources = resourcesService.getResources();

  return (
    <>
      {siteService.mustSetUpCountDown() && <CountDown deadline={new Date(2020, 9, 3, 9, 0, 0)} current={new Date()} />}
      <Banner to="#about" title={Resources.titles.homePage} subtitle={Resources.subtitles.homePage} type="even">
        {/* <div className={styles.flags}>
          <FlagArgentina className={styles.flag} onClick={() => window.open("//ar.vopen.tech", "_blank")} />
          <FlagChile className={styles.flag} onClick={() => window.open("//cl.vopen.tech", "_blank")} />
          <FlagMexico className={styles.flag} onClick={() => window.open("//mx.vopen.tech", "_blank")} />
          <FlagUruguay className={styles.flag} onClick={() => window.open("//uy.vopen.tech", "_blank")} />
        </div> */}
        {/* <Slider conferenceInfo={conferenceInfo} /> */}
      </Banner>
      <PageSection id="about">
        <About />
        <History />
        <CtaButtons className="pv5-l pv4" />
      </PageSection>
    </>
  );
};

export default class GlobalApp extends React.PureComponent {
  state: any = {
    conferenceData: undefined,
    legacyGlobalData: undefined,
    team: [] as IUser[]
  };

  async componentDidMount() {
    const legacyGlobalDataPromise = backendService.fetchConference("vopen-global-legacy");
    const editionPromise = backendService.fetchConference("vopen-global-2020");
    const [legacyGlobalData, edition] = await Promise.all([legacyGlobalDataPromise, editionPromise]);
    const user = siteService.getUser();
    const team = edition && edition.organizers ? edition.organizers : [] as IUser[];

    this.setState({ legacyGlobalData, team, user });
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
          <Route path="/team" component={() => <ExecutiveTeamPage team={team as IUser[]}/>} />
          <Route path="/conference" component={VirtualConferencePage} />
          <Route
            path="/login"
            component={() => {
              window.location.href = loginUrl;
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
    if (this.state.user) {
      return (
        <>
          <span>{`${this.state.user.given_name}`}</span>
          <NavLink to="/logout-oidc">{logoutText}</NavLink>
        </>
      );
    } else {
      return <NavLink to="/login">{loginText}</NavLink>;
    }
  }
}
