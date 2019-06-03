import React from "react";
import classNames from "classnames";
import SponsorshipPackage from "./SponsorshipPackage";
import sponsorshipData from "./sponsorshipPackages.json";
import styles from "./SponsorshipPackages.module.scss";

export default class SponsorshipPackages extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { selectedSponsorship: "Diamond" };
  }

  handleSponsorshipChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.dataset["itemName"];
    this.setState({ selectedSponsorship: value });
  };

  render() {
    const { className, type } = this.props;
    const { selectedSponsorship }: any = this.state;
    const cssClasses = classNames(styles.sponsorshipPackages, className, type === "odd" && styles.odd);

    return (
      <div className={cssClasses}>
        <div className={styles.sponsorships}>
          {sponsorshipData.map(item => (
            <div
              className={classNames(styles.sponsorshipHeader, item.name === selectedSponsorship && styles.active)}
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
        <SponsorshipPackage name={selectedSponsorship} />
      </div>
    );
  }
}
