import React from "react";
import styles from "./History.module.scss";
import { resourcesService } from "../../services";

export default class History extends React.PureComponent<any, any> {

    render() {
    const Resources = resourcesService.getResources();

    return (
        <div className={styles.history}>
          <ul className="w-80-l w-100 flex flex-wrap justify-between-l justify-center pv4-l pv1 pl0 list ttu tc">
          <li className="pa3">
            <p className="f1 fw7 mv0">+5000</p>
            <p className="mv0 f4 ttu">{Resources.info.attendees}</p>
          </li>
          <li className="pa3">
            <p className="f1 fw7 mv0">+200</p>
            <p className="mv0 f4">{Resources.info.expositors}</p>
          </li>
          <li className="pa3">
            <p className="f1 fw7 mv0">+150</p>
            <p className="mv0 f4">{Resources.info.companies}</p>
          </li>
          <li className="pa3">
            <p className="f1 fw7 mv0">10</p>
            <p className="mv0 f4">{Resources.info.editions}</p>
          </li>
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
                <div className={styles.trianglePast}>
                  <span></span>
                </div>
                <p className={styles.textAbout}>{Resources.info.history}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-20-l w-100 pl4-l ph2 tl-l tc mt5-l mt3 h4">
          <p className="f4">{Resources.info.today}</p>
          <p className="f5">
            <a href="http://netconf.global" target="_blank" rel="noopener" className="navy hover-yellow">
              {Resources.buttons.visit} .NET Conf global
            </a>
          </p>
        </div>
      </div>
      </div>
      );
    }
}
