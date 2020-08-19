import React from "react";
import { Team } from "../../components";
import { Props } from "./types";
import { resourcesService } from "../../services";
import styles from "./ExecutiveTeamPage.module.scss";

export default class ExecutiveTeamPage extends React.PureComponent<Props> {
  render() {
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.executiveTeamPage}>
        <div className={styles.banner}>
          <h1 className={styles.tag}>{Resources.pages.team}</h1>
          <h2 className={styles.title}>{Resources.titles.sloganTeam}</h2>
        </div>
        <Team className={styles.executiveTeam} team={this.props.team} />
      </div>
    );
  }
}
