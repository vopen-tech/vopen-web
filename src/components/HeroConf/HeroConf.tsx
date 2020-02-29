import React from "react";
import classNames from "classnames";
import { VOpenLogo, ActionButton } from "../../components";
import { resourcesService } from "../../services";

import { Props, State } from "./types";
import styles from "./HeroConf.module.scss";

export default class HeroConf extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined,
    type: "odd"
  };

  render() {
    const { children, className, type, conferenceInfo } = this.props;
    const Resources = resourcesService.getResources();
    const cssClasses = classNames(type === "even" && styles.evenSection, type === "odd" && styles.oddSection, className);
    const conferenceTitle = conferenceInfo.name.replace("vOpen", "").trim();
    const isTicketSaleEnabled = conferenceInfo.editionTickets && conferenceInfo.editionTickets.length > 0;

    return (
      <div className={cssClasses}>
        <div className={styles.hero}>
          <div className="flex flex-wrap">
            <div className="w-100">
              <div className={styles.info}>
                <div className="self-center">
                  <div className="flex flex-wrap items-center justify-centerself-center">
                    <VOpenLogo className={styles.logo} />
                    <h1 className={styles.tag}>{conferenceTitle}</h1>
                  </div>
                  <h2 className={styles.title}>{Resources.titles.homePage}</h2>
                  <p className={styles.bajada}>{Resources.info.mission}</p>
                </div>
              </div>
              <div className={styles.textPast}>
                <div className="flex flex-wrap">
                  {isTicketSaleEnabled && <ActionButton type="primary" text={Resources.banner.ticketsTitle} url="/#tickets" target="_self" />}
                </div>
                <div className="flex flex-wrap">
                  <div className={styles.textData}>
                    <p className={styles.time}>{conferenceInfo.date}</p>
                    <p>
                      <a href="/#location">{conferenceInfo.locationName}</a>{" "}
                    </p>
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
