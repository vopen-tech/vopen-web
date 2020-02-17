import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer, NavLink, PageSection, Banner, About, History, CtaButtons, Loading } from "../../components";
import { FlagArgentina, FlagChile, FlagMexico, FlagUruguay } from "../../components/SVGs";
import { ConductPage, SpeakersPage, SponsorsPage, ExecutiveTeamPage } from "../../pages";
import { resourcesService, backendService } from "../../services";

import styles from "./GlobalApp.module.scss";

const Home = () => {
  const Resources = resourcesService.getResources();

  return (
    <>
      <Banner to="#about" title="2019">
        <div className={styles.flags}>
          <FlagArgentina className={styles.flag} onClick={() => window.open("//ar.vopen.tech", "_blank")} />
          <FlagChile className={styles.flag} onClick={() => window.open("//cl.vopen.tech", "_blank")} />
          <FlagMexico className={styles.flag} onClick={() => window.open("//mx.vopen.tech", "_blank")} />
          <FlagUruguay className={styles.flag} onClick={() => window.open("//uy.vopen.tech", "_blank")} />
        </div>
      </Banner>
      <PageSection id="about">
        <About />
        <History />
        <CtaButtons />
      </PageSection>
    </>
  );
};

export default class GlobalApp extends React.PureComponent {
  state: any = {
    legacyGlobalData: undefined
  };

  async componentDidMount() {
    const legacyGlobalData = await backendService.fetchConference("vopen-global-legacy");
    this.setState({ legacyGlobalData });
  }

  render() {
    const { legacyGlobalData } = this.state;

    if (!legacyGlobalData) {
      return <Loading />;
    }

    const Resources = resourcesService.getResources();

    return (
      <Router>
        <div className={styles.globalApp}>
          <Header>
            <NavLink to="/speakers">{Resources.pages.speakers}</NavLink>
            <NavLink to="/sponsors">{Resources.pages.sponsorship}</NavLink>
            <NavLink to="/team">{Resources.pages.team}</NavLink>
            <NavLink to="https://goo.gl/forms/hzPXdO4Aa0jGUjW72">{Resources.buttons.wantToBeSpeaker}</NavLink>
          </Header>
          {/* Body */}
          <Route exact path="/" component={Home} />
          <Route path="/conduct" component={ConductPage} />
          <Route path="/speakers" render={() => <SpeakersPage speakers={legacyGlobalData.speakers as any} />} />
          <Route path="/sponsors" component={() => <SponsorsPage sponsors={legacyGlobalData.sponsors as any} />} />
          <Route path="/team" component={ExecutiveTeamPage} />
          {/* End body */}
          <Footer>
            <NavLink to="/conduct">{Resources.pages.codeOfConduct}</NavLink>
          </Footer>
        </div>
      </Router>
    );
  }
}
