import React from "react";
import { SponsorshipPackages, Sponsors } from "../../components";
import { resourcesService } from "../../services";

import { Props } from "./types";
import styles from "./SponsorsPage.module.scss";

export default class SponsorsPage extends React.PureComponent<Props> {
  render() {
    const { sponsors = [] } = this.props;
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.sponsorsPage}>
        <SponsorshipPackages className={styles.sponsorshipPackages} />
        <Sponsors className={styles.sponsors} title={Resources.titles.sponsorPage} sponsors={sponsors} />
      </div>
    );
  }
}
