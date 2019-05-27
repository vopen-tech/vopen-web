import React from "react";
import styles from "./Team.module.scss";
import { SocialIcon } from "../../components";

const team: any[] = [
  {
    name: "Fabian Imaz",
    imageUrl: "http://uy.netconf.global/Content/images/demo/organizers/FabianImaz.jpg",
    socialInfo: {
      twitter: "https://twitter.com/fabianimaz",
      linkedin: "http://uy.linkedin.com/in/siderys"
    }
  },
  {
    name: "Fabian Fernandez",
    imageUrl: "http://uy.netconf.global/Content/images/demo/organizers/fabian.jpg",
    socialInfo: {
      twitter: "https://twitter.com/kzfabi",
      linkedin: "http://uy.linkedin.com/in/kzfabi"
    }
  },
  {
    name: "Pablo Di Loreto",
    imageUrl: "http://uy.netconf.global/Content/images/demo/organizers/pablodiloreto.jpg",
    socialInfo: {
      twitter: "https://twitter.com/pablodiloreto",
      linkedin: "https://ar.linkedin.com/in/pablodiloreto"
    }
  },
  {
    name: "Guillermo Bellman",
    imageUrl: "http://ar.netconf.global/Content/images/demo/organizers/guillermobellmann.jpg",
    socialInfo: {
      twitter: "http://twitter.com/gjbellmann",
      linkedin: "http://ar.linkedin.com/in/gbellmann"
    }
  },
  {
    name: "Mariano Vazquez",
    imageUrl: "http://ar.netconf.global/Content/images/demo/organizers/marianovazquez.jpg",
    socialInfo: {
      twitter: "http://twitter.com/nanovazquez87",
      linkedin: "https://www.linkedin.com/in/nanovazquez"
    }
  }
];

export default class Team extends React.PureComponent {
  render() {
    return (
      <div className={styles.team}>
        <h3 className={styles.title}>Executive team</h3>
        <div className={styles.people}>
          {team.map(item => (
            <div className={styles.person} key={item.name}>
              <img className={styles.personImage} src={item.imageUrl} />
              <h6 className={styles.personName}>{item.name}</h6>
              <div className={styles.personSocialInfo}>
                {Object.keys(item.socialInfo).map(key => (
                  <SocialIcon key={key} type={key as any} url={item.socialInfo[key]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
