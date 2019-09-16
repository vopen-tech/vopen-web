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
    const { className, speakers, type } = this.props;
    const cssClasses = classNames(styles.speakers, className);
    const Resources = resourcesService.getResources();
    const actionButtonType = type === "odd" ? "tertiary" : "secondary";

    return (
      <div>
      <div className={styles.banner}>
        <span className={styles.subtitle}>{Resources.pages.speakers}</span>
        <span className={styles.title}>
        {Resources.titles.speakersPage}
        </span>
        <ActionButton type={actionButtonType} text={Resources.buttons.wantToBeSpeaker} url={constants.speakerCallUrl} />
        </div>
        <Team className={styles.speakersList} team={speakers} type={type} />
      </div>
    );
  }
}
