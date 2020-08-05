import React from "react";
import { CountDown, PageSection, Speakers } from "../../components";

import styles from "./VirtualConferencePage.module.scss";

export default class VirtualConferencePage extends React.PureComponent {
  render() {
    return (
      <>
        <CountDown deadline={new Date(2020, 9, 3, 9, 0, 0)} current={new Date()} />
        <PageSection className={styles.pageSection} id="Secciones">
          <p>Próximamente más info..</p>
        </PageSection>
      </>
    );
  }
}
