import React from "react";
import classNames from "classnames";
import Sponsorship from "./Sponsorship";
import sponsorshipData from "./sponsorships.json";

import styles from "./SponsorshipSelector.module.scss";

export default class SponsorshipSelector extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { selectedSponsorship: "Diamond" };
  }

  handleSponsorshipChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.dataset["itemName"];
    this.setState({ selectedSponsorship: value });
  };

  render() {
    const { name, className } = this.props;
    const { selectedSponsorship }: any = this.state;
    const cssClasses = classNames(className, styles.sponsorshipSelector);
    return (
      <div className={cssClasses}>
        <div className={styles.sponsorships}>
          {sponsorshipData.map(item => (
            <div
              className={classNames(
                styles.sponsorshipHeader,
                item.name === selectedSponsorship && styles.active
              )}
              key={item.name}
              data-item-name={item.name}
              role="button"
              tabIndex={0}
              onClick={this.handleSponsorshipChange}
            >
              <h4 className={styles.sponsorshipHeaderTitle}>{item.name}</h4>
              <h5 className={styles.sponsorshipHeaderPrice}>{item.price}</h5>
            </div>
          ))}
        </div>
        <Sponsorship name={selectedSponsorship} />
      </div>
    );
  }
}
