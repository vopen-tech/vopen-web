import React from "react";
import { SponsorshipPackages } from "../../components";

import styles from "./Sponsorship.module.scss";

export default class Sponsorship extends React.PureComponent {
  render() {
    return (
      <div className={styles.sponsorship}>
        <SponsorshipPackages />
      </div>
    );
  }
}
