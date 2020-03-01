import React from "react";
import { Schedule, PageSection } from "../../components";
import { resourcesService } from "../../services";

import styles from "./SchedulePage.module.scss";
import { Props } from "./types";

export default class SchedulePage extends React.PureComponent<Props> {
  render() {
    const { activities } = this.props;
    const Resources = resourcesService.getResources();
    return (
      <>
        <PageSection className={styles.schedulePage}>
        <div className={styles.banner}>
          <h1 className={styles.subtitle}>{Resources.pages.schedule}</h1>
        </div>
          <Schedule activities={activities} />
        </PageSection>
      </>
    )
  }
}
