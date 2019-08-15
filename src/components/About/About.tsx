import React from "react";
import classNames from "classnames";
import { Props, State } from "./types";
import styles from "./About.module.scss";
import { resourcesService } from "../../services";

export default class About extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const { className } = this.props;
    const cssClasses = classNames(styles.about, className);
    const Resources = resourcesService.getResources();

    return (
      <div className={cssClasses}>
        <div className={styles.image} />
        <p className={styles.textSection}>
          {Resources.info.welcome}
          <br /> <br />
          {Resources.info.mission}
          <br /> <br />
          {Resources.info.history}
          <br /> <br />
          {Resources.info.today}
        </p>
      </div>
    );
  }
}
