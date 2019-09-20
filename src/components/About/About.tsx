import React from "react";
import classNames from "classnames";
import { Props, State } from "./types";
import styles from "./About.module.scss";
import { resourcesService } from "../../services";
import constants from "../../constants";

export default class About extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const { className } = this.props;
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.about}>
        <div className={styles.image} />
        <div className={styles.textSection}>
        <p className={styles.textAbout}>
          {Resources.info.mission}
        </p>
      <div className={styles.triangle}><span></span></div>
        </div>
        <ul className="w-80-l w-100 flex flex-wrap justify-between-l justify-center pv4-l pv1 pl0 list ttu tc">
          <li className="pa3"><p className="f1 fw7 mv0">+5000</p><p className="mv0 f4 ttu">{Resources.info.attendees}</p></li>
          <li className="pa3"><p className="f1 fw7 mv0">+200</p><p className="mv0 f4">{Resources.info.expositors}</p></li>
          <li className="pa3"><p className="f1 fw7 mv0">+150</p><p className="mv0 f4">{Resources.info.companies}</p></li>
          <li className="pa3"><p className="f1 fw7 mv0">10</p><p className="mv0 f4">{Resources.info.editions}</p></li>
        </ul>
        <div className="flex flex-wrap">
        <div className="w-80-l w-100 flex flex-wrap">
          <div className="w-third-l w-100 mt5-l mt2">
            <div className={styles.image2} />
          </div>
          <div className="w-two-thirds-l w-100 pl4-l pl0 pv0-l pv3">
            <div className={styles.image3} />
            <div className={styles.textPast}>
              <div className="flex flex-wrap">
                <div className={styles.trianglePast}><span></span></div>
                <p className={styles.textAbout}>{Resources.info.history}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-20-l w-100 pl4-l pl0 mt5-l mt3 h4">
      <p className="f4">{Resources.info.today}</p>
      <p className="f5"><a href="http://netconf.global" target="_blank" rel="noopener" className="navy hover-yellow">{Resources.buttons.visit} Netconf.global</a></p>
        </div>
      </div>
      <div className="flex flex-wrap nl3 nr3 pv5">
        <div className="w-third-l w-100 pa3">
          <div className={styles.action} onClick={() => window.open(constants.speakerCallUrl)}>
          <h1 className="ttu f2 mv0">{Resources.buttons.wantToBeSpeaker}</h1>
          <p className="ttu f5 mv0">{Resources.buttons.as} {Resources.pages.speakers}</p>
          </div>
        </div>
        <div className="w-third-l w-100 pa3">
          <div className={styles.action} onClick={() => window.open(constants.sponsorsCallUrl)}>
          <h1 className="ttu f2 mv0">{Resources.buttons.wantToBeSponsors}</h1>
          <p className="ttu f5 mv0">{Resources.buttons.as} {Resources.pages.sponsors}</p>
          </div>
        </div>
        <div className="w-third-l w-100 pa3">
          <div className={styles.action} onClick={() => window.open(constants.rsvpUrl)}>
          <h1 className="ttu f2 mv0">{Resources.buttons.wantToReceiveNews}</h1>
          <p className="ttu f5 mv0">{Resources.buttons.toNews}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
