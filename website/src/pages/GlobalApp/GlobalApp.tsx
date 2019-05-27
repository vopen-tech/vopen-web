import React from "react";
import classNames from "classnames";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { BackgroundTriangle, SocialIcon, VOpenLogo } from "../../components";

import Home from "../Home";
import Conduct from "../Conduct";
import Sponsorship from "../Sponsorship";
import Team from "../Team";

import styles from "./GlobalApp.module.scss";

export default class GlobalApp extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className={styles.globalApp}>
          {/* Header */}
          <BackgroundTriangle showLightBlueTriangle={true} backgroundColor="#1d116e" />
          <nav className={styles.nav}>
            <NavLink activeClassName={styles.navActive} className={classNames(styles.navLink, styles.home)} to="/">
              <VOpenLogo className={styles.logo} />
            </NavLink>
            <NavLink activeClassName={styles.navActive} className={styles.navLink} to="/sponsorship">
              Sponsorship
            </NavLink>
            <NavLink activeClassName={styles.navActive} className={styles.navLink} to="/team">
              Team
            </NavLink>
          </nav>
          {/* Body */}
          <Route exact path="/" component={Home} />
          <Route path="/conduct" component={Conduct} />
          <Route path="/sponsorship" component={Sponsorship} />
          <Route path="/team" component={Team} />
          {/* Footer */}
          <footer className={styles.footer}>
            <SocialIcon type="twitter" url="https://twitter.com/vopentech" />
            <SocialIcon type="linkedin" url="https://linkedin.com/vopentech" />
            <SocialIcon type="facebook" url="https://facebook.com/vopentech" />
            <SocialIcon type="instagram" url="https://instagram.com/vopentech" />
            <SocialIcon type="youtube" url="https://youtube.com/vopentech" />
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
