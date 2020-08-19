import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer, NavLink, PageSection, Banner, About, History, CtaButtons, Loading, CountDown } from "../../components";
import { FlagArgentina, FlagChile, FlagMexico, FlagUruguay } from "../../components/SVGs";
import { BlogPage, ConductPage, SpeakersPage, SponsorsPage, ExecutiveTeamPage, VirtualConferencePage } from "../../pages";
import { IEdition } from "../../types/IEdition";
import { siteService, resourcesService, backendService } from "../../services";
import Constants from "../../constants";

import styles from "./GlobalApp.module.scss";
import { IUser } from "../../types/IUser";

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
    const legacyGlobalData = await backendService.fetchConference("vopen-global-legacy");
    const legacyGlobalDataPromise = backendService.fetchConference("vopen-global-legacy");
    const editionPromise = backendService.fetchConference("vopen-global-2020");
    const [legacyGlobalData, edition] = await Promise.all(legacyGlobalDataPromise, editionPromise);
    const team = edition && edition.organizers ? edition.organizers : [] as IUser[];

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
          </Header>
          {/* Body */}
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/conduct" component={ConductPage} />
          <Route path="/speakers" render={() => <SpeakersPage speakers={legacyGlobalData.speakers as any} />} />
          <Route path="/sponsors" component={() => <SponsorsPage sponsors={legacyGlobalData.sponsors as any} />} />
          <Route path="/team" component={() => <ExecutiveTeamPage team={team as IUser[]}/>} />
          <Route path="/conference" component={VirtualConferencePage} />
          {/* End body */}
          <Footer>
            <NavLink to="/conduct">{Resources.pages.codeOfConduct}</NavLink>
          </Footer>
        </div>
      </Router>
    );
  }
}
