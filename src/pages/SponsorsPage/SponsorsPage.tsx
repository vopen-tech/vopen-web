import React from "react";
import { ActionButton, SponsorshipPackages, Sponsors } from "../../components";
import { resourcesService } from "../../services";
import constants from "../../constants";

import { Props } from "./types";
import styles from "./SponsorsPage.module.scss";

export default class SponsorsPage extends React.PureComponent<Props> {
  render() {
    const { sponsors = [] } = this.props;
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.sponsorsPage}>
        <ActionButton type="secondary" text={Resources.buttons.wantToBeSponsors} url={constants.sponsorsCallUrl} />
        <SponsorshipPackages className={styles.sponsorshipPackages} />
        <Sponsors className={styles.sponsors} title={Resources.titles.sponsorPage} sponsors={sponsors} />
      </div>
    );
  }
}
