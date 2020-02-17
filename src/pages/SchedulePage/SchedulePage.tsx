import React from "react";
import { resourcesService } from "../../services";
import styles from "./SchedulePage.module.scss";

export default class SchedulePage extends React.PureComponent {
  render() {
    const Resources = resourcesService.getResources();
    return <div className={styles.schedulePage}>{Resources.buttons.soon}</div>;
  }
}
