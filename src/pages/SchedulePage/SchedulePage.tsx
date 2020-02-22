import React from "react";
import { Schedule, PageSection } from "../../components";

import styles from "./SchedulePage.module.scss";
import { Props } from "./types";

export default class SchedulePage extends React.PureComponent<Props> {
  render() {
    const { activities } = this.props;
    return (
      <>
        <PageSection className={styles.schedulePage}>
          <Schedule activities={activities} />
        </PageSection>
      </>
    )
  }
}
