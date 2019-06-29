import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer, NavLink, PageSection, Banner, About, PastEditions } from "../../components";
import { FlagArgentina, FlagChile, FlagColombia, FlagPeru, FlagUruguay } from "../../components/SVGs";
import { Conduct, Sponsorship, Team } from "../../pages";

import styles from "./GlobalApp.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner to="#about" title="2019">
        <div className={styles.flags}>
          <FlagArgentina className={styles.flag} onClick={() => window.open("//ar.vopen.tech", "_blank")} />
          <FlagChile className={styles.flag} onClick={() => window.open("//cl.vopen.tech", "_blank")} />
          <FlagColombia className={styles.flag} onClick={() => window.open("//co.vopen.tech", "_blank")} />
          <FlagPeru className={styles.flag} onClick={() => window.open("//pe.vopen.tech", "_blank")} />
          <FlagUruguay className={styles.flag} onClick={() => window.open("//uy.vopen.tech", "_blank")} />
        </div>
      </Banner>
      <PageSection id="about" title="About">
        <About />
      </PageSection>
      <PageSection title="Ediciones anteriores" type="odd">
        <PastEditions />
      </PageSection>
    </div>
  );
};

export default class GlobalApp extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className={styles.globalApp}>
          <Header>
            <NavLink to="/sponsorship">Sponsorship</NavLink>
            <NavLink to="/team">Team</NavLink>
          </Header>
          {/* Body */}
          <Route exact path="/" component={Home} />
          <Route path="/conduct" component={Conduct} />
          <Route path="/sponsorship" component={Sponsorship} />
          <Route path="/team" component={Team} />
          {/* End body */}
          <Footer>
            <NavLink to="/conduct">Código de conducta</NavLink>
          </Footer>
        </div>
      </Router>
    );
  }
}
