import React from "react";
import { Speakers } from "../../components";

import { Props } from "./types";
import styles from "./Speakers.module.scss";

export default class SpeakersPage extends React.PureComponent<Props> {
  render() {
    const { speakers } = this.props;
    return (
      <div className={styles.speakers}>
        <Speakers speakers={speakers} type="even" />
      </div>
    );
  }
}
