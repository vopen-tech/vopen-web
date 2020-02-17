import React from "react";
import { Props, State } from "./types";
import styles from "./CtaButtons.module.scss";
import { resourcesService } from "../../services";
import constants from "../../constants";

export default class CtaButtons extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const Resources = resourcesService.getResources();

    return (
    <div className={styles.ctabuttons}>
      <div className="flex flex-wrap nl3 nr3 pv5">
        <div className="w-third-l w-100 pa3">
          <div className={styles.action} onClick={()=> window.open(constants.speakerCallUrl)}>
            <h1 className="ttu f2 mv0">{Resources.buttons.wantToBeSpeaker}</h1>
            <p className="ttu f5 mv0">
              {Resources.buttons.as} {Resources.pages.speakers}
            </p>
          </div>
        </div>
        <div className="w-third-l w-100 pa3">
          <div className={styles.action} onClick={()=> window.open(constants.sponsorsCallUrl)}>
            <h1 className="ttu f2 mv0">{Resources.buttons.wantToBeSponsors}</h1>
            <p className="ttu f5 mv0">
              {Resources.buttons.as} {Resources.pages.sponsors}
            </p>
          </div>
        </div>
        <div className="w-third-l w-100 pa3">
          <div className={styles.action} onClick={()=> window.open(constants.rsvpUrl)}>
            <h1 className="ttu f2 mv0">{Resources.buttons.wantToReceiveNews}</h1>
            <p className="ttu f5 mv0">{Resources.buttons.toNews}</p>
          </div>
        </div>
      </div>
    </div>
    );
    }
}