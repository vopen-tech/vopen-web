import React from "react";
import { NavLink } from "react-router-dom";
import { BackgroundTriangle, VOpenLogo } from "..";

import styles from "./Header.module.scss";

export default class Header extends React.PureComponent<any, any> {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.header}>
        <BackgroundTriangle showLightBlueTriangle={true} backgroundColor="#1d116e" />
        <nav className={styles.nav}>
          <NavLink className={styles.home} to="/">
            <VOpenLogo className={styles.logo} />
          </NavLink>
          <div className={styles.navMenu}>{children}</div>
        </nav>
      </div>
    );
  }
}
