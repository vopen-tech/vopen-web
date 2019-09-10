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
    title: undefined,
    type: "odd",
    speakers: []
  };

  render() {
    const { className, speakers, type, title } = this.props;
    const cssClasses = classNames(styles.speakers, className);
    const Resources = resourcesService.getResources();

    const actionButtonType = type === "odd" ? "tertiary" : "secondary";

    return (
      <div className={cssClasses}>
        {title && (
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>
        )}
        <ActionButton type={actionButtonType} text={Resources.buttons.wantToBeSpeaker} url={constants.speakerCallUrl} />
        {speakers.length > 0 && <Team className={styles.speakersList} team={speakers} type={type} />}
      </div>
    );
  }
}
