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

    return (
      <div>
        <Team className={styles.speakersList} team={speakers} type={type} />
      </div>
    );
  }
}
