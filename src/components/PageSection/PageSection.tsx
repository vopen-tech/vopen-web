import React from "react";
import classnames from "classnames";
import BackgroundTriangle from "../BackgroundTriangle";
import { IProps, IState } from "./types";
import styles from "./PageSection.module.scss";

export default class PageSection extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    id: undefined,
    title: undefined,
    className: undefined,
    type: "even"
  };

  render() {
    const { children, id, title, className, type } = this.props;
    const cssClasses = classnames(
      type === "even" && styles.evenSection,
      type === "odd" && styles.oddSection,
      type === "full" && styles.fullSection,
      type === "primary" && styles.primarySection,
      className
    );

    const showBackgroundTriangle = type !== "full" && type !== "primary";

    return (
      <div id={id} className={cssClasses}>
        {showBackgroundTriangle && <BackgroundTriangle isOdd={type === "odd"} />}
        {title && (
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    );
  }
}
