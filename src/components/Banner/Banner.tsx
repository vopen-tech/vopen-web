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
        <h2 className={styles.tag}>{Resources.subtitles.homePage}</h2>
        <h1 className={styles.title}>
        {Resources.titles.homePage}
        </h1>
        {children && <div className={styles.children}>{children}</div>}
      </div>
    );
  }
}
