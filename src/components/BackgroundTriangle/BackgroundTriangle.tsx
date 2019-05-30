import React from "react";
import { Props } from "./types";
import styles from "./BackgroundTriangle.module.scss";

export default class BackgroundTriangle extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    isOdd: false,
    showLightBlueTriangle: false,
    backgroundColor: undefined
  };

  render() {
    const { isOdd, showLightBlueTriangle, backgroundColor } = this.props;

    const backgroundTriangleCssClass = isOdd ? styles.oddBackgroundTriangle : styles.backgroundTriangle;
    const triangleClassName = isOdd ? styles.oddDottedTriangle : styles.dottedTriangle;
    const backgroundClassName = isOdd ? styles.oddTriangleBehindDottedBackground : styles.triangleBehindDottedBackground;

    return (
      <div className={backgroundTriangleCssClass}>
        <div className={triangleClassName} />
        <div className={backgroundClassName} style={{ borderBottomColor: backgroundColor }} />
        {showLightBlueTriangle && <div className={styles.triangle} />}
      </div>
    );
  }
}
