import React from "react";
import styles from "./Loading.module.scss";

export default class Loading extends React.PureComponent {
  render() {
    return (
      <div className={styles.loading}>
        <img className={styles.logo} src="/favicon.ico"></img>
      </div>
    );
  }
}
