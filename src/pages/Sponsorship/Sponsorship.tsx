import React from "react";
import { ActionButton, SponsorshipPackages } from "../../components";

import styles from "./Sponsorship.module.scss";

export default class Sponsorship extends React.PureComponent {
  render() {
    return (
      <div className={styles.sponsorship}>
        <ActionButton type="secondary" text="Quiero ser sponsor" url="https://forms.gle/ob5vr5WRZMrxP1uv7" />
        <SponsorshipPackages />
      </div>
    );
  }
}
