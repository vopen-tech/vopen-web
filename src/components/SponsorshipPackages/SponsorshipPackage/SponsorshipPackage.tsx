import React from "react";
import classNames from "classnames";
import { resourcesService } from "../../../services";

import { Props, SponsorshipType } from "./types";
import styles from "./SponsorshipPackage.module.scss";

export default class SponsorshipPackage extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  getSponsorshipItems(sponsorshipType: SponsorshipType): string[] {
    const Resources = resourcesService.getResources();
    const sponsorship = {
      diamond: [
        Resources.sponsorshipPackages.offer1,
        Resources.sponsorshipPackages.offer2,
        Resources.sponsorshipPackages.offer3,
        Resources.sponsorshipPackages.offer4,
        Resources.sponsorshipPackages.offer5,
        Resources.sponsorshipPackages.offer6,
        Resources.sponsorshipPackages.offer7,
        Resources.sponsorshipPackages.offer8,
        Resources.sponsorshipPackages.offer9,
        Resources.sponsorshipPackages.offer10,
        Resources.sponsorshipPackages.offer11,
        Resources.sponsorshipPackages.offer12,
        Resources.sponsorshipPackages.offer13,
        Resources.sponsorshipPackages.offer14
      ],
      gold: [
        Resources.sponsorshipPackages.offer1,
        Resources.sponsorshipPackages.offer2,
        Resources.sponsorshipPackages.offer3,
        Resources.sponsorshipPackages.offer5,
        Resources.sponsorshipPackages.offer6,
        Resources.sponsorshipPackages.offer9,
        Resources.sponsorshipPackages.offer10,
        Resources.sponsorshipPackages.offer11
      ],
      silver: [
        Resources.sponsorshipPackages.offer1,
        Resources.sponsorshipPackages.offer2,
        Resources.sponsorshipPackages.offer3,
        Resources.sponsorshipPackages.offer6,
        Resources.sponsorshipPackages.offer9
      ],
      digital: [Resources.sponsorshipPackages.offer1, Resources.sponsorshipPackages.offer6, Resources.sponsorshipPackages.offer9]
    };

    return sponsorship[sponsorshipType];
  }

  render() {
    const { sponsorshipType, className } = this.props;

    const Resources = resourcesService.getResources();
    const sponsorshipItems = this.getSponsorshipItems(sponsorshipType);
    const cssClasses = classNames(styles.sponsorshipPackage, className);
    const sponsorshipTypeCapitalized = sponsorshipType.charAt(0).toUpperCase() + sponsorshipType.slice(1);

    if (!sponsorshipItems) {
      return null;
    }

    return (
      <div className={cssClasses}>
        <h6 className={styles.title}>{Resources.sponsorshipPackages.title.replace("${type}", sponsorshipTypeCapitalized)}</h6>
        <ul className={styles.packageList}>
          {sponsorshipItems.map(item => (
            <li key={item} className={styles.packageListItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
