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


  render() {
    const { title, subtitle, linkUrl } = this.props;
    const showInfoSection = title || subtitle;

    const content = (
      <>
        {showInfoSection && (
          <div className={styles.info}>
            <h4 className={styles.title}>{title}</h4>
            <h5 className={styles.subtitle}>{subtitle}</h5>
          </div>
        )}
      </>
    );


    
    if (linkUrl) {
      return (
        <NavLink className={classNames(styles.link)} to={linkUrl}>
          {content}
        </NavLink>
      );
    }

    return <div className={styles.infoIcon}>{content}</div>;
  }
}
