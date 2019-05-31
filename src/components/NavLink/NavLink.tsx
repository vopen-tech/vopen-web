import React from "react";
import { NavLink as Link, NavLinkProps as LinkProps } from "react-router-dom";
import styles from "./NavLink.module.scss";

export default class NavLink extends React.PureComponent<LinkProps, any> {
  render() {
    const { children, to } = this.props;

    const isExternalUrl = to.toString().indexOf("//") === 0 || to.toString().indexOf("http") === 0;
    if (isExternalUrl) {
      return (
        <a className={styles.externalNavLink} href={to.toString()} target="_blank">
          {children}
        </a>
      );
    }

    const isInternalLink = to.toString().indexOf("#") === 0;
    if (isInternalLink) {
      return (
        <a className={styles.navLink} href={to.toString()}>
          {children}
        </a>
      );
    }

    return (
      <Link className={styles.navLink} activeClassName={styles.navActive} to={to}>
        {children}
      </Link>
    );
  }
}
