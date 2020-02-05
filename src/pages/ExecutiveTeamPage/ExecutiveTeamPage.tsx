import React from "react";
import { Team } from "../../components";
import { IUser } from "../../types/IUser";
import { resourcesService } from "../../services";
import styles from "./ExecutiveTeamPage.module.scss";

const team: IUser[] = [
  {
    id: "Fabian Imaz",
    name: "Fabian Imaz",
    imageUrl: "http://uy.netconf.global/Content/images/demo/organizers/FabianImaz.jpg",
    socialLinks: [
      { type: "Twitter", url: "https://twitter.com/fabianimaz" },
      { type: "Linkedin", url: "http://uy.linkedin.com/in/siderys" }
    ]
  },
  {
    id: "Fabian Fernandez",
    name: "Fabian Fernandez",
    imageUrl: "https://i.imgur.com/vXLIy95.jpg",
    socialLinks: [
      { type: "Twitter", url: "https://twitter.com/kzfabi" },
      { type: "Linkedin", url: "http://uy.linkedin.com/in/kzfabi" }
    ]
  },
  {
    id: "Pablo Di Loreto",
    name: "Pablo Di Loreto",
    imageUrl: "http://uy.netconf.global/Content/images/demo/organizers/pablodiloreto.jpg",
    socialLinks: [
      { type: "Twitter", url: "https://twitter.com/pablodiloreto" },
      { type: "Linkedin", url: "http://uy.linkedin.com/in/pablodiloreto" }
    ]
  },
  {
    id: "Mariano Vazquez",
    name: "Mariano Vazquez",
    imageUrl: "http://ar.netconf.global/Content/images/demo/organizers/marianovazquez.jpg",
    socialLinks: [
      { type: "Twitter", url: "https://twitter.com/nanovazquez87" },
      { type: "Linkedin", url: "http://uy.linkedin.com/in/nanovazquez" }
    ]
  }
];

export default class ExecutiveTeamPage extends React.PureComponent {
  render() {
    const Resources = resourcesService.getResources();

    return (
      <div>
        <div className={styles.banner}>
          <span className={styles.subtitle}>{Resources.pages.team}</span>
          <span className={styles.title}>{Resources.titles.globalTeam}</span>
        </div>
        <Team team={team} />
      </div>
    );
  }
}
