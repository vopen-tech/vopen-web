import React from "react";
import classNames from "classnames";
import SocialIcon from "../SocialIcon";

import { IProps, IState } from "./types";
import styles from "./Team.module.scss";

const sortByType = (itemA: any, itemB: any) => {
  if (itemA.type < itemB.type) return -1;
  if (itemA.type > itemB.type) return 1;
  return 0;
};

export default class Team extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    team: [],
    type: ""
  };

  render() {
    const { team, type } = this.props;
    const cssClasses = classNames(styles.team, type === "odd" && styles.odd);

    if (!team || !team.length) {
      return (
        <div className={cssClasses}>
          <span style={{ marginTop: 50, marginBottom: 50 }}>Próximamente</span>
        </div>
      );
    }

    return (
      <div className={cssClasses}>
        {(team || []).map(item => (
          <div className={styles.person} key={item.name}>
            <img className={styles.personImage} src={item.imageUrl} />
            <h6 className={styles.personName}>{item.name}</h6>
            <div className={styles.personSocialInfo}>
              {(item.socialLinks || []).sort(sortByType).map(item => (
                <SocialIcon key={item.type} iconType={item.type as any} type={type} url={item.url} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
