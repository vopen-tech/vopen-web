import React from "react";
import styles from "./Home.module.scss";
import { About, ActionButton, VOpenLogo, ArrowBottom, PastEditions } from "../../components";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.home}>
        <div className={styles.banner}>
          <span className={styles.title}>
            <VOpenLogo className={styles.logo} />
            <span className={styles.year}>2019</span>
          </span>
          <div className={styles.actions}>
            <ActionButton text="Quiero ser sponsor" url="https://forms.gle/ob5vr5WRZMrxP1uv7" />
            <ActionButton type="secondary" text="Quiero ser speaker" url="https://forms.gle/nfvm3uJT7vT2zgnRA" />
          </div>
          <a href="#about" className={styles.goDown}>
            <ArrowBottom className={styles.arrowDown} />
          </a>
        </div>
        <About id="about" className={styles.section} />
        <PastEditions className={styles.oddSection} />
      </div>
    );
  }
}
