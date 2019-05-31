import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer, NavLink, PageSection, Banner, About, Sponsors, Speakers } from "../../components";
import { Conduct, Schedule, Team } from "../../pages";
import styles from "./ConferenceApp.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner to="#about" />
      <PageSection id="about" title="About">
        <About />
      </PageSection>
      <PageSection id="speakers" title="Speakers" type="odd">
        <Speakers />
      </PageSection>
      <PageSection id="sponsors" title="Sponsors">
        <Sponsors />
      </PageSection>
    </div>
  );
};

export default class ConferenceApp extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className={styles.conferenceApp}>
          <Header>
            <NavLink to="/schedule">Agenda</NavLink>
            <NavLink to="/#speakers">Speakers</NavLink>
            <NavLink to="/#sponsors">Sponsors</NavLink>
            <NavLink to="//vopen.tech">Global</NavLink>
          </Header>
          {/* Body */}
          <Route exact path="/" component={Home} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/conduct" component={Conduct} />
          <Route path="/team" component={Team} />
          {/* End body */}
          <Footer>
            <NavLink activeClassName={styles.navActive} className={styles.navLink} to="/conduct">
              Código de conducta
            </NavLink>
          </Footer>
        </div>
      </Router>
    );
  }
}
