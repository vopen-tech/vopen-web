import React from "react";
import { ActionButton, SponsorshipPackages } from "../../components";
import { resourcesService } from "../../services";
import constants from "../../constants";

import styles from "./Sponsorship.module.scss";

export default class Sponsorship extends React.PureComponent {
  render() {
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.sponsorship}>
        <ActionButton type="secondary" text={Resources.buttons.wantToBeSponsors} url={constants.sponsorsCallUrl} />
        <SponsorshipPackages />
      </div>
    );
  }
}
