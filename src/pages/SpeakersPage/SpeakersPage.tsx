import React from "react";
import { Speakers } from "../../components";
import { ActionButton } from "../../components";
import constants from "../../constants";
import { Props } from "./types";
import styles from "./SpeakersPage.module.scss";
import { resourcesService } from "../../services";

export default class SpeakersPage extends React.PureComponent<Props> {
  render() {
    const { speakers = [] } = this.props;
    const Resources = resourcesService.getResources();

    return (
      <>
        <div className={styles.banner}>
          <h1 className={styles.tag}>{Resources.pages.speakers}</h1>
          <h2 className={styles.title}>{Resources.titles.speakersPage}</h2>
          <div className="pt4">
            <ActionButton type="secondary" text={Resources.buttons.wantToBeSpeaker} url={constants.speakerCallUrl} target="_blank" />
          </div>
        </div>
        <Speakers speakers={speakers} />
      </>
    );
  }
}
