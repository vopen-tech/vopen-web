import React from "react";
import classNames from "classnames";
import { ActionButton, Team } from "../";
import { resourcesService } from "../../services";
import constants from "../../constants";

import { Props, State } from "./types";
import styles from "./Speakers.module.scss";

export default class Speakers extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined,
    speakers: []
  };

  render() {
    const { className, speakers } = this.props;
    const cssClasses = classNames(styles.speakers, className);
    const Resources = resourcesService.getResources();

    return (
      <div className={cssClasses}>
        <ActionButton type="tertiary" text={Resources.buttons.wantToBeSpeaker} url={constants.speakerCallUrl} />
        {speakers.length > 0 && <Team className={styles.speakersList} team={speakers} type={"odd"} />}
      </div>
    );
  }
}
