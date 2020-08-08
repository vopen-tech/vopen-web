import React from "react";
import { SponsorshipPackages2020 as SponsorshipPackages, Sponsors } from "../../components";
import { resourcesService } from "../../services";

import { Props } from "./types";
import styles from "./SponsorsPage.module.scss";

export default class SponsorsPage extends React.PureComponent<Props> {
  render() {
    const { sponsors = [] } = this.props;
    const showSponsors = sponsors && sponsors.length > 0;
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.sponsorsPage}>
        <SponsorshipPackages className={styles.sponsorshipPackages} />
        {showSponsors && <Sponsors className={styles.sponsors} title={Resources.titles.sponsorPage} sponsors={sponsors} />}
      </div>
    );
  }
}
