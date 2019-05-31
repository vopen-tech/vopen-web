import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer, NavLink, Banner, About, PastEditions } from "../../components";
import { Conduct, Schedule, Speakers, Sponsorship, Team } from "../../pages";
import styles from "./ConferenceApp.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner to="#about" />
      <About id="about" className={styles.section} />
      <PastEditions className={styles.oddSection} />
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
            <NavLink to="/speakers">Speakers</NavLink>
            <NavLink to="#sponsors">Sponsors</NavLink>
            <NavLink to="//vopen.tech">Global</NavLink>
          </Header>
          {/* Body */}
          <Route exact path="/" component={Home} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/conduct" component={Conduct} />
          <Route path="/sponsorship" component={Sponsorship} />
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
