import React from "react";
import { Props, State } from "./types";
import styles from "./About.module.scss";
import { resourcesService } from "../../services";
import constants from "../../constants";

export default class About extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.about}>
        <div className={styles.image} />
        <div className={styles.textSection}>
          <p className={styles.textAbout}>{Resources.info.mission}</p>
          <div className={styles.triangle}>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}
