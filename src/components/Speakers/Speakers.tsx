import React from "react";
import { Team } from "../";

import { Props, State } from "./types";
import styles from "./Speakers.module.scss";

export default class Speakers extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    title: undefined,
    type: "odd",
    speakers: []
  };

  render() {
    const { speakers, type } = this.props;

    return (
      <div>
        <Team className={styles.speakersList} team={speakers} type={type} />
      </div>
    );
  }
}
