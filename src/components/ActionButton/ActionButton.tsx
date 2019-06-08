import React from "react";
import classNames from "classnames";
import { Props, State } from "./types";
import styles from "./ActionButton.module.scss";

export default class About extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    type: "primary"
  };

  getClassType() {
    const { type } = this.props;

    if (type === "primary") {
      return styles.primary;
    }

    if (type === "secondary") {
      return styles.secondary;
    }

    return styles.tertiary;
  }

  render() {
    const { text, url } = this.props;
    const classType = this.getClassType();
    const cssClasses = classNames(styles.actionButton, classType);

    return (
      <a className={cssClasses} href={url} target="_blank">
        {text}
      </a>
    );
  }
}