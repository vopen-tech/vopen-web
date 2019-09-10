import React from "react";
import { Speakers } from "../../components";

import { Props } from "./types";
import styles from "./SpeakersPage.module.scss";
import { resourcesService } from "../../services";

export default class SpeakersPage extends React.PureComponent<Props> {
  render() {
    const { speakers = [] } = this.props;
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.speakersPage}>
        <Speakers title={Resources.titles.speakersPage} speakers={speakers} type="even" />
      </div>
    );
  }
}
