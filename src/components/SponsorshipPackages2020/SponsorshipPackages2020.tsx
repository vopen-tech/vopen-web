import React from "react";
import { resourcesService } from "../../services";
import { ActionButton } from "..";
import constants from "../../constants";
import styles from "./SponsorshipPackages2020.module.scss";

export default class SponsorshipPackages2020 extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { selectedSponsorshipType: "diamond" };
  }

  handleSponsorshipChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.dataset["itemName"];
    this.setState({ selectedSponsorshipType: value });
  };

  render() {
    const Resources = resourcesService.getResources();

    return (
      <div>
        <div className={styles.banner}>
          <h1 className={styles.tag}>{Resources.pages.sponsorship}</h1>
          <h2 className={styles.title}>{Resources.titles.sponsorship}</h2>
          <div className="pt4">
            <ActionButton type="secondary" text={Resources.buttons.wantToBeSponsors} url={constants.sponsorsCallUrl} target="_blank" />
          </div>
        </div>
        <div className={styles.sponsorship}>
          <div className="mt5 relative">
            <div className={styles.textSection}>
              <p className={styles.textAbout}>{Resources.info.sponsorship}</p>
            </div>
            <div className="flex">
              <div className={styles.numbers}>
                <p className="f1 fw7 mv0">+5000</p>
                <p className="mv0 f4 pl2">{Resources.info.attendees}</p>
              </div>
              <div className={styles.triangle}>
                <span></span>
              </div>
              <div className={styles.image} />
            </div>
          </div>
          <div className="flex flex-wrap flex-row-l flex-column-reverse pv6-l pv4">
            <div className="w-20-l w-100 pr4-l pr0 mt0-l mt4">
              <div className={styles.image3} />
              <div className={styles.image4} />
              <div className={styles.image2} />
            </div>
            <div className="w-80-l w-100">
              <h4 className="title-table dn-l db">{Resources.sponsorshipPackages.title}</h4>
              <table>
                <thead>
                  <tr>
                    <th scope="col">{Resources.sponsorshipPackages.title}</th>
                    <th scope="col">
                      gold <span>USD 1.000</span>
                    </th>
                    <th scope="col">
                      silver <span>USD 500</span>
                    </th>
                    <th scope="col">
                      supporter <span>USD 0</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer1}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="supporter">✓</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer2}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="supporter">✓</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer3}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="supporter">✓</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer4}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="supporter">✓</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer5}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="supporter">✓</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer6}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="supporter">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer7}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="supporter">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer8}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="supporter">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer9}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="supporter">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer10}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">{Resources.sponsorshipPackages2020.purchasable}</td>
                    <td data-label="supporter">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer11}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">-</td>
                    <td data-label="supporter">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer12}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">-</td>
                    <td data-label="supporter">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages2020.offer13}</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">-</td>
                    <td data-label="supporter">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
