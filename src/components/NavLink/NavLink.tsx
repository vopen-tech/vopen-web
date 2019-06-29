import React from "react";
import classNames from "classnames";
import { NavLink as Link, NavLinkProps as LinkProps } from "react-router-dom";
import styles from "./NavLink.module.scss";

export default class NavLink extends React.PureComponent<LinkProps> {
  render() {
    const { children, className, to } = this.props;
    const isExternalUrl = to.toString().indexOf("//") === 0 || to.toString().indexOf("http") === 0;
    const isInternalLink = to.toString().indexOf("/#") === 0;
    const cssClasses = classNames(styles.navLink, className);

    if (isExternalUrl) {
      return (
        <a className={cssClasses} href={to.toString()} target="_blank">
          {children}
        </a>
      );
    }

    if (isInternalLink) {
      return (
        <a className={cssClasses} href={to.toString()}>
          {children}
        </a>
      );
    }

    return (
      <Link className={cssClasses} activeClassName={styles.navActive} to={to}>
        {children}
      </Link>
    );
  }
}
