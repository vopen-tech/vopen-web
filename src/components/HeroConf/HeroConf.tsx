import React from "react";
import { Props, State } from "./types";
import styles from "./HeroConf.module.scss";
import classNames from "classnames";
import { VOpenLogo } from "../../components";

export default class HeroConf extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined,
    type: "odd"
  };

  render() {
    const { subtitle, children, className, type } = this.props;
    const cssClasses = classNames(
      type === "even" && styles.evenSection,
      type === "odd" && styles.oddSection,
      className
    );


    return (
      <div className={cssClasses}>
        <div className={styles.hero}>
        <div className={styles.date}>
              21, 22 y 23 de Octubre
            </div>
          <div className="flex justify-center items-center">
          <VOpenLogo className={styles.logo} />
          <h1 className={styles.tag}>
            {subtitle}
          </h1>
          </div>

            <div className={styles.place}>
           <i className="fas fa-map-marker-alt"></i> <span>Torres de las Telecomunicaciones, Antel</span>
            </div>
          {children}
        </div>
      </div>
    );
  }
}