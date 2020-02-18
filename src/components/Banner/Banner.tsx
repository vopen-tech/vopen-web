import React from "react";
import classNames from "classnames";
import { IProps, IState } from "./types";
import styles from "./Banner.module.scss";

export default class Banner extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    className: undefined,
    type: "even"
  };

  render() {
    const { title, subtitle, children, className, type } = this.props;
    const cssClasses = classNames(
      type === "even" && styles.evenSection,
      type === "odd" && styles.oddSection,
      className
    );


    return (
      <div className={cssClasses}>
        <div className={styles.banner}>
          <h2 className={styles.tag}>{subtitle}</h2>
          <h1 className={styles.title}>
            {title}
          </h1>
          {children && <div className={styles.children}>{children}</div>}
        </div>
      </div>
    );
  }
}
