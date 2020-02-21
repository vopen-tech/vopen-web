import React from "react";
import { resourcesService } from "../../services";
import styles from "./SchedulePage.module.scss";
import { Schedule, PageSection } from "../../components";
import { IEdition } from "../../types/IEdition";

export default class SchedulePage extends React.PureComponent {
  render() {
    return (
      <>
      <PageSection className={styles.schedulePage}>
          <Schedule />
        </PageSection>
        </>
    )
  }
}
