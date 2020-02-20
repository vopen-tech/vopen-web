import React from "react";
import classNames from "classnames";
import { Props, State } from "./types";
import styles from "./CtaButtons.module.scss";
import { resourcesService } from "../../services";
import constants from "../../constants";

export default class CtaButtons extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined,
    type: "even"
  };

  render() {
    const Resources = resourcesService.getResources();
    const { className, type } = this.props;
    const cssClasses = classNames(
      type === "even" && styles.evenSection,
      type === "odd" && styles.oddSection,
      className
    );

    return (
      <div className={cssClasses}>
    <div className={styles.ctabuttons}>
      <div className="flex flex-wrap nl3 nr3">
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

    </div>
    );
    }
}