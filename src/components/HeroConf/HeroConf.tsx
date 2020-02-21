import React from "react";
import { Props, State } from "./types";
import styles from "./HeroConf.module.scss";
import classNames from "classnames";
import { VOpenLogo, ActionButton } from "../../components";
import Background from '../images/homepage-2.jpg';
import {resourcesService } from "../../services";

export default class HeroConf extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined,
    type: "odd"
  };

  render() {
    const { subtitle, children, className, type } = this.props;
    const Resources = resourcesService.getResources();
    const cssClasses = classNames(
      type === "even" && styles.evenSection,
      type === "odd" && styles.oddSection,
      className
    );


    return (
      <div className={cssClasses}>
        <div className={styles.hero}>

          <div className="flex flex-wrap">
            <div className="w-100 pa3">
              <div className={styles.image} style={{ backgroundImage: `url(${Background})` }} >
              <div className={styles.overlay}>
              <div className="flex flex-wrap items-center justify-centerself-center">
                  <VOpenLogo className={styles.logo} />
                  <h1 className={styles.tag}>
                    {subtitle}
                  </h1>
                </div>
                </div>
                </div>

              <div className={styles.textPast}>
                <div>
                <ActionButton text={Resources.banner.ticketsTitle} url="/#tickets" target="_self"/>
                </div>
                <div className="flex flex-wrap">
                  <div className={styles.trianglePast}>
                    <span></span>
                  </div>
                  <div className={styles.textAbout}>
                    <p className={styles.time}>21 al 23 de Octubre</p>
                    <p>Torres de las Telecomunicaciones, Antel</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {children}
        </div>
      </div>
    );
  }
}