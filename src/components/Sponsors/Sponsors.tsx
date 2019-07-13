import React from "react";
import classNames from "classnames";

import { ISponsor } from "../../types/ISponsor";
import { Props, State } from "./types";
import styles from "./Sponsors.module.scss";

const Sponsor = ({ sponsor }: { sponsor: ISponsor }) => {
  const cssClass = classNames(styles.sponsor, styles[sponsor.type]);

  return (
    <a className={cssClass} href={`${sponsor.url}?ref=vopen`} target="_blank">
      <img className={styles.sponsorImage} src={sponsor.imageUrl} />
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

    const diamondSponsors = sponsors.filter(item => item.type === "diamond");
    const goldSponsors = sponsors.filter(item => item.type === "gold");
    const silverSponsors = sponsors.filter(item => item.type === "silver");
    const digitalSponsors = sponsors.filter(item => item.type === "digital");
    const otherSponsors = sponsors.filter(item => item.type !== "diamond" && item.type !== "gold" && item.type !== "silver" && item.type !== "digital");

    const Sponsors = ({ items }: { items: ISponsor[] }) => (
      <div className={styles.sponsorsRow}>
        {items.map(item => (
          <Sponsor key={item.id} sponsor={item} />
        ))}
      </div>
    );

    return (
      <div className={cssClasses}>
        {title && (
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>
        )}
        <Sponsors items={diamondSponsors} />
        <Sponsors items={goldSponsors} />
        <Sponsors items={silverSponsors} />
        <Sponsors items={digitalSponsors} />
        <Sponsors items={otherSponsors} />
      </div>
    );
  }
}
