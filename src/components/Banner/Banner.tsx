import React from "react";
import { ActionButton, VOpenLogo, ArrowBottom } from "..";
import { IProps, IState } from "./types";
import styles from "./Banner.module.scss";

export default class Banner extends React.PureComponent<IProps, IState> {
  render() {
    const { to } = this.props;
    return (
      <div className={styles.banner}>
        <span className={styles.title}>
          <VOpenLogo className={styles.logo} />
          <span className={styles.year}>2019</span>
        </span>
        <div className={styles.actions}>
          <ActionButton text="Quiero ser sponsor" url="https://forms.gle/ob5vr5WRZMrxP1uv7" />
          <ActionButton type="secondary" text="Quiero ser speaker" url="https://forms.gle/nfvm3uJT7vT2zgnRA" />
        </div>
        {to && (
          <a href="#about" className={styles.goDown}>
            <ArrowBottom className={styles.arrowDown} />
          </a>
        )}
      </div>
    );
  }
}
