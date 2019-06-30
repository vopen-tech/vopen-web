import React from "react";
import { Team } from "../../components";
import { IOrganizer } from "../../types/IOrganizer";

import styles from "./ExecutiveTeam.module.scss";

const team: IOrganizer[] = [
  {
    id: "Fabian Imaz",
    name: "Fabian Imaz",
    imageUrl: "http://uy.netconf.global/Content/images/demo/organizers/FabianImaz.jpg",
    socialLinks: [{ type: "twitter", url: "https://twitter.com/fabianimaz" }, { type: "linkedin", url: "http://uy.linkedin.com/in/siderys" }]
  },
  {
    id: "Fabian Fernandez",
    name: "Fabian Fernandez",
    imageUrl: "https://i.imgur.com/vXLIy95.jpg",
    socialLinks: [{ type: "twitter", url: "https://twitter.com/kzfabi" }, { type: "linkedin", url: "http://uy.linkedin.com/in/kzfabi" }]
  },
  {
    id: "Pablo Di Loreto",
    name: "Pablo Di Loreto",
    imageUrl: "http://uy.netconf.global/Content/images/demo/organizers/pablodiloreto.jpg",
    socialLinks: [{ type: "twitter", url: "https://twitter.com/pablodiloreto" }, { type: "linkedin", url: "http://uy.linkedin.com/in/pablodiloreto" }]
  },
  {
    id: "Guillermo Bellmann",
    name: "Guillermo Bellmann",
    imageUrl: "http://ar.netconf.global/Content/images/demo/organizers/guillermobellmann.jpg",
    socialLinks: [{ type: "twitter", url: "https://twitter.com/gjbellmann" }, { type: "linkedin", url: "http://uy.linkedin.com/in/gbellmann" }]
  },
  {
    id: "Mariano Vazquez",
    name: "Mariano Vazquez",
    imageUrl: "http://ar.netconf.global/Content/images/demo/organizers/marianovazquez.jpg",
    socialLinks: [{ type: "twitter", url: "https://twitter.com/nanovazquez87" }, { type: "linkedin", url: "http://uy.linkedin.com/in/nanovazquez" }]
  }
];

export default class ExecutiveTeam extends React.PureComponent {
  render() {
    return (
      <div className={styles.team}>
        <h3 className={styles.title}>Executive team</h3>
        <Team team={team} />
      </div>
    );
  }
}
