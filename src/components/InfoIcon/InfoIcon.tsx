import React from "react";
import classNames from "classnames";
import { IProps, IState } from "./types";
import styles from "./InfoIcon.module.scss";
import NavLink from "../NavLink";

export default class InfoIcon extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    type: "location",
    title: undefined,
    subtitle: undefined,
    linkUrl: undefined
  };

  getIconClassName() {
    const { type } = this.props;
    // find them @ https://fontawesome.com/icons?d=gallery

    if (type === "location") {
      return "fas fa-map-marker-alt";
    }

    if (type === "date") {
      return "fas fa-calendar-day";
    }

    if (type === "speakers") {
      return "fas fa-microphone-alt";
    }

    if (type === "tickets") {
      return "fas fa-ticket-alt";
    }

    return "fa";
  }

  render() {
    const { title, subtitle, linkUrl } = this.props;
    const iconClassName = this.getIconClassName();
    const cssClassName = classNames(styles.infoIcon, linkUrl && styles.link);
    const Wrapper: any = linkUrl ? NavLink : React.Fragment;

    return (
      <Wrapper to={linkUrl}>
        <div className={cssClassName}>
          <div className={styles.icon}>
            <i className={iconClassName} />
          </div>
          <div className={styles.info}>
            <h4 className={styles.title}>{title}</h4>
            <h5 className={styles.subtitle}>{subtitle}</h5>
          </div>
        </div>
      </Wrapper>
    );
  }
}
