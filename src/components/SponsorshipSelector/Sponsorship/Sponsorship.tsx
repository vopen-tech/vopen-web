import React from "react";
import classNames from "classnames";
import sponsorships from "../sponsorships.json";

import { Props } from "./types";
import styles from "./Sponsorship.module.scss";

export default class Sponsorship extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const { name, className } = this.props;
    const sponsorshipData = sponsorships.find(item => item.name === name);
    const cssClasses = classNames(className, styles.sponsorship);

    if (!sponsorshipData) {
      return null;
    }

    return (
      <div className={cssClasses}>
        <h6 className={styles.title}>
          El paquete {sponsorshipData.name} incluye:
        </h6>
        <ul className={styles.packageList}>
          {sponsorshipData.items.map(item => (
            <li key={item} className={styles.packageListItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
