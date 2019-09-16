import React from "react";
import { resourcesService } from "../../services";

import { IProps, IState } from "./types";
import styles from "./Banner.module.scss";

export default class Banner extends React.PureComponent<IProps, IState> {
  render() {
    const { children } = this.props;
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.banner}>
        <span className={styles.subtitle}>{Resources.subtitles.homePage}</span>
        <span className={styles.title}>
        {Resources.titles.homePage}
        </span>
        {children && <div className={styles.children}>{children}</div>}
      </div>
    );
  }
}
