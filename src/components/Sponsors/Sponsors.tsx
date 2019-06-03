import React from "react";
import classNames from "classnames";
import { ActionButton, SponsorshipPackages } from "..";
import constants from "../../constants";

import { Props, State } from "./types";
import styles from "./Sponsors.module.scss";

export default class Sponsors extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const { className } = this.props;
    const cssClasses = classNames(styles.sponsors, className);

    return (
      <div className={cssClasses}>
        <ActionButton type="tertiary" text="Quiero ser sponsor" url={constants.sponsorsCallUrl} />
        <SponsorshipPackages type="odd" />
      </div>
    );
  }
}
