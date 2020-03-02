import React from "react";
import classNames from "classnames";

import { ISponsor } from "../../types/ISponsor";
import { Props, State } from "./types";
import styles from "./Sponsors.module.scss";

interface ISponsorProps {
  sponsor: ISponsor;
  sponsorClassName: string;
}

const Sponsor = ({ sponsor, sponsorClassName }: ISponsorProps) => {
  const cssClasses = classNames(styles.sponsor, sponsorClassName);
  
  return (
    <a href={`${sponsor.url}?ref=vopen`} target="_blank" rel="noopner">
      <span className={cssClasses} ><img className={styles.sponsorImage} src={sponsor.imageUrl} alt="sponsor"/></span>
      <div className={styles.sponsorLegend}>{sponsor.type}</div>
    </a>
  );
};

export default class Sponsors extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined,
    title: "",
    sponsors: []
  };

  render() {
    const { className, title, sponsors } = this.props;
    const cssClasses = classNames(styles.sponsors, className);

    if (!sponsors || !sponsors.length) {
      return null;
    }

    const diamondSponsors = sponsors.filter(item => item.type && item.type.toLowerCase() === "diamond");
    const goldSponsors = sponsors.filter(item => item.type && item.type.toLowerCase() === "gold");
    const silverSponsors = sponsors.filter(item => item.type &&item.type.toLowerCase() === "silver");
    const digitalSponsors = sponsors.filter(item => item.type && item.type.toLowerCase() === "digital");
    const otherSponsors = sponsors.filter(item => !item.type || item.type.toLowerCase() !== "diamond" && item.type.toLowerCase() !== "gold" && item.type.toLowerCase() !== "silver" && item.type.toLowerCase() !== "digital");

    const Sponsors = ({ items, sponsorClassName }: { items: ISponsor[], sponsorClassName: string }) => {
      if (!items || !items.length) {
        return null;
      }

      return (<div className={styles.sponsorsRow}>
          {items.map(item => (
            <Sponsor key={item.id} sponsor={item} sponsorClassName={sponsorClassName} />
          ))}
        </div>
      );
    };

    return (
      <div className={cssClasses}>
        <Sponsors items={diamondSponsors} sponsorClassName={styles.diamond} />
        <Sponsors items={goldSponsors} sponsorClassName={styles.gold} />
        <Sponsors items={silverSponsors} sponsorClassName={styles.silver} />
        <Sponsors items={digitalSponsors} sponsorClassName={styles.digital} />
        <Sponsors items={otherSponsors} sponsorClassName={styles.other} />
      </div>
    );
  }
}
