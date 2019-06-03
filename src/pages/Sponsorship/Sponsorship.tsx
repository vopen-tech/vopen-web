import React from "react";
import { ActionButton, SponsorshipPackages } from "../../components";
import constants from "../../constants";

import styles from "./Sponsorship.module.scss";

export default class Sponsorship extends React.PureComponent {
  render() {
    return (
      <div className={styles.sponsorship}>
        <ActionButton type="secondary" text="Quiero ser sponsor" url={constants.sponsorsCallUrl} />
        <SponsorshipPackages />
      </div>
    );
  }
}
