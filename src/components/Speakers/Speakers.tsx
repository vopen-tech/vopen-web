import React from "react";
import classNames from "classnames";
import { Props, State } from "./types";
import styles from "./Speakers.module.scss";
import { ActionButton } from "../";

export default class Speakers extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const { className } = this.props;
    const cssClasses = classNames(styles.speakers, className);

    return (
      <div className={cssClasses}>
        <ActionButton type="tertiary" text="Quiero ser speaker" url="https://forms.gle/nfvm3uJT7vT2zgnRA" />
      </div>
    );
  }
}
