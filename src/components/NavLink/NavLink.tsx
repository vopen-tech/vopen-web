import React from "react";
import classNames from "classnames";
import { NavLink as Link, NavLinkProps as LinkProps } from "react-router-dom";
import styles from "./NavLink.module.scss";

const hrefNavigate = () => {
  setTimeout(() => {
    // Just a little help to really navigate with href
    window.location.href = window.location.href;
  }, 50);
};

interface Props extends LinkProps {
  isButton?: boolean;
}

export default class NavLink extends React.PureComponent<Props> {
  render() {
    const { children, className, to, isButton } = this.props;
    const isExternalUrl = to.toString().indexOf("//") === 0 || to.toString().indexOf("http") === 0;
    const isInternalLink = to.toString().indexOf("/#") === 0;
    const cssClasses = classNames(styles.navLink, isButton && styles.button, className);

    if (isExternalUrl) {
      return (
        <a className={cssClasses} href={to.toString()} target="_blank">
          {children}
        </a>
      );
    }

    if (isInternalLink) {
      const url = to.toString().split("#");
      const pathname = url[0];
      const hash = `#${url[1]}`;
      return (
        <Link className={cssClasses} activeClassName={styles.navActive} to={{ pathname, hash }} onClick={hrefNavigate}>
          {children}
        </Link>
      );
    }

    return (
      <Link className={cssClasses} activeClassName={styles.navActive} to={to}>
        {children}
      </Link>
    );
  }
}
