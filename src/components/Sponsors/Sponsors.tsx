import React from "react";
import classNames from "classnames";
import { Props, State } from "./types";
import styles from "./Sponsors.module.scss";
import { ActionButton, SponsorshipPackages } from "..";

export default class Sponsors extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const { className } = this.props;
    const cssClasses = classNames(styles.sponsors, className);

    return (
      <div className={cssClasses}>
        <ActionButton type="tertiary" text="Quiero ser sponsor" url="https://forms.gle/ob5vr5WRZMrxP1uv7" />
        <SponsorshipPackages type="odd" />
      </div>
    );
  }
}
