import React from "react";
import { resourcesService } from "../../services";
import classNames from "classnames";
import SocialIcon from "../SocialIcon";
import { ActionButton } from "../../components";
import constants from "../../constants";

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
    type: "",
    className: ""
  };

  render() {
    const { className, team, type } = this.props;
    const Resources = resourcesService.getResources();
    const cssClasses = classNames(styles.team, type === "odd" && styles.odd, className);

    if (!team || !team.length) {
      return (
        <div className={cssClasses}>
          <div className="pb5">
            <ActionButton type="secondary" text={Resources.buttons.wantToBeSpeaker} url={constants.speakerCallUrl} target="_blank" />
          </div>
        </div>
      );
    }

    return (
      <div className={cssClasses}>
        {(team || []).map(item => (
          <div className={styles.person} key={item.name}>
            <span className={styles.personImage} style={{ backgroundImage: `url(${item.imageUrl})` }}></span>
            <h6 className={styles.personName}>{item.name}</h6>
            {item.jobTitle && <p className={styles.personJobInfo}>{item.jobTitle}</p>}
            {item.company && <p className={styles.personJobInfo}>{item.company}</p>}
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
