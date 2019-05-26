import React from "react";
import classNames from "classnames";
import { Props, State } from "./types";
import styles from "./Edition.module.scss";

export default class Edition extends React.PureComponent<Props, State> {
  render() {
    const { date, location, imageUrl, url, className } = this.props;
    const cssClass = classNames(styles.edition, className);

    return (
      <a className={cssClass} href={url} target="_blank" style={{ backgroundImage: `url("${imageUrl}")` }}>
        <h5 className={styles.location}>{location}</h5>
        <h6 className={styles.date}>{date}</h6>
      </a>
    );
  }
}
