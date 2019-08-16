import React from "react";
import classNames from "classnames";
import SponsorshipPackage from "./SponsorshipPackage";
import styles from "./SponsorshipPackages.module.scss";

export default class SponsorshipPackages extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { selectedSponsorshipType: "diamond" };
  }

  handleSponsorshipChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.dataset["itemName"];
    this.setState({ selectedSponsorshipType: value });
  };

  render() {
    const { className, type } = this.props;
    const { selectedSponsorshipType }: any = this.state;
    const cssClasses = classNames(styles.sponsorshipPackages, className, type === "odd" && styles.odd);
    const sponsorshipTypes = ["diamond", "gold", "silver", "digital"];

    return (
      <div className={cssClasses}>
        <div className={styles.sponsorships}>
          {sponsorshipTypes.map(type => (
            <div
              className={classNames(styles.sponsorshipHeader, type === selectedSponsorshipType && styles.active)}
              key={type}
              data-item-name={type}
              role="button"
              tabIndex={0}
              onClick={this.handleSponsorshipChange}
            >
              <h4 className={styles.sponsorshipHeaderTitle}>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
            </div>
          ))}
        </div>
        <SponsorshipPackage sponsorshipType={selectedSponsorshipType} />
      </div>
    );
  }
}
