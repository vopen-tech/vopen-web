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
      <div>
        <div className={styles.banner}>
          <h2 className={styles.tag}>{Resources.pages.speakers}</h2>
          <h1 className={styles.title}>{Resources.titles.speakersPage}</h1>
          <ActionButton type="secondary" text={Resources.buttons.wantToBeSpeaker} url={constants.sponsorsCallUrl} target="_blank"/>
        </div>
        <Speakers speakers={speakers}/>
      </div>
    );
  }
}
