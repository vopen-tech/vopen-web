import React from "react";
import classNames from "classnames";
import { Props, State } from "./types";
import styles from "./ActionButton.module.scss";

export default class About extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    type: "primary"
  };

  render() {
    const { type, text, url } = this.props;
    const classType = type === "primary" ? styles.primary : styles.secondary;
    const cssClasses = classNames(classType, styles.actionButton);

    return (
      <a className={cssClasses} href={url} target="_blank">
        {text}
      </a>
    );
  }
}
