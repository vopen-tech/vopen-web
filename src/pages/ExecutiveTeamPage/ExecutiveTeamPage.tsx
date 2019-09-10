import React from "react";
import { Team } from "../../components";
import { IUser } from "../../types/IUser";

import styles from "./ExecutiveTeamPage.module.scss";

const team: IUser[] = [
  {
    id: "Fabian Imaz",
    name: "Fabian Imaz",
    imageUrl: "http://uy.netconf.global/Content/images/demo/organizers/FabianImaz.jpg",
    socialLinks: [{ type: "Twitter", url: "https://twitter.com/fabianimaz" }, { type: "Linkedin", url: "http://uy.linkedin.com/in/siderys" }]
  },
  {
    id: "Fabian Fernandez",
    name: "Fabian Fernandez",
    imageUrl: "https://i.imgur.com/vXLIy95.jpg",
    socialLinks: [{ type: "Twitter", url: "https://twitter.com/kzfabi" }, { type: "Linkedin", url: "http://uy.linkedin.com/in/kzfabi" }]
  },
  {
    id: "Pablo Di Loreto",
    name: "Pablo Di Loreto",
    imageUrl: "http://uy.netconf.global/Content/images/demo/organizers/pablodiloreto.jpg",
    socialLinks: [{ type: "Twitter", url: "https://twitter.com/pablodiloreto" }, { type: "Linkedin", url: "http://uy.linkedin.com/in/pablodiloreto" }]
  },
  {
    id: "Guillermo Bellmann",
    name: "Guillermo Bellmann",
    imageUrl: "http://ar.netconf.global/Content/images/demo/organizers/guillermobellmann.jpg",
    socialLinks: [{ type: "Twitter", url: "https://twitter.com/gjbellmann" }, { type: "Linkedin", url: "http://uy.linkedin.com/in/gbellmann" }]
  },
  {
    id: "Mariano Vazquez",
    name: "Mariano Vazquez",
    imageUrl: "http://ar.netconf.global/Content/images/demo/organizers/marianovazquez.jpg",
    socialLinks: [{ type: "Twitter", url: "https://twitter.com/nanovazquez87" }, { type: "Linkedin", url: "http://uy.linkedin.com/in/nanovazquez" }]
  }
];

export default class ExecutiveTeamPage extends React.PureComponent {
  render() {
    return (
      <div className={styles.executiveTeamPage}>
        <h3 className={styles.title}>Executive team</h3>
        <Team team={team} />
      </div>
    );
  }
}
