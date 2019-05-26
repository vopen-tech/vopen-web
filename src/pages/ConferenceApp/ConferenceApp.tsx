import React from "react";
import classNames from "classnames";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { BackgroundTriangle, SocialIcon, VOpenLogo } from "../../components";

import Home from "../Home";
import Agenda from "../Agenda";
import Speakers from "../Agenda";
import Conduct from "../Conduct";
import Sponsorship from "../Sponsorship";

import styles from "./ConferenceApp.module.scss";

export default class ConferenceApp extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className={styles.conferenceApp}>
          {/* Header */}
          <BackgroundTriangle showLightBlueTriangle={true} backgroundColor="#1d116e" />
          <nav className={styles.nav}>
            <NavLink activeClassName={styles.navActive} className={classNames(styles.navLink, styles.home)} to="/">
              <VOpenLogo className={styles.logo} />
            </NavLink>
            <NavLink activeClassName={styles.navActive} className={styles.navLink} to="/agenda">
              Agenda
            </NavLink>
            <NavLink activeClassName={styles.navActive} className={styles.navLink} to="/speakers">
              Speakers
            </NavLink>
            <NavLink activeClassName={styles.navActive} className={styles.navLink} to="/sponsorship">
              Sponsorship
            </NavLink>
          </nav>
          {/* Body */}
          <Route exact path="/" component={Home} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/conduct" component={Conduct} />
          <Route path="/sponsors" component={Sponsorship} />
          {/* Footer */}
          <footer className={styles.footer}>
            <SocialIcon type="twitter" url="https://twitter.com/vopen" />
            <SocialIcon type="linkedin" url="https://linkedin.com/vopen" />
            <SocialIcon type="facebook" url="https://facebook.com/vopen" />
            <SocialIcon type="instagram" url="https://instagram.com/vopen" />
            <SocialIcon type="youtube" url="https://youtube.com/vopen" />
            <div className={styles.separator} />
            <NavLink activeClassName={styles.navActive} className={styles.navLink} to="/conduct">
              Código de conducta
            </NavLink>
          </footer>
        </div>
      </Router>
    );
  }
}
