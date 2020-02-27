import React from "react";
import { resourcesService } from "../../services";
import { ActionButton } from "../../components";
import constants from "../../constants";
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
    const Resources = resourcesService.getResources();

    return (
      <div>
        <div className={styles.banner}>
          <h2 className={styles.tag}>{Resources.pages.sponsorship}</h2>
          <h1 className={styles.title}>{Resources.titles.sponsorship}</h1>
          <div className="pt4">
          <ActionButton type="secondary" text={Resources.buttons.wantToBeSponsors} url={constants.sponsorsCallUrl} target="_blank"/>
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
                      diamond <span>USD 10.000</span>
                    </th>
                    <th scope="col">
                      gold <span>USD 5.000</span>
                    </th>
                    <th scope="col">
                      silver <span>USD 2.500</span>
                    </th>
                    <th scope="col">
                      digital <span>USD 1.000</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer1}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="digital">✓</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer2}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="digital">✓</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer3}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">✓</td>
                    <td data-label="digital">✓</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer4}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">-</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer5}</td>
                    <td data-label="diamond">large</td>
                    <td data-label="gold">medium</td>
                    <td data-label="silver">small</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer6}</td>
                    <td data-label="diamond">10</td>
                    <td data-label="gold">5</td>
                    <td data-label="silver">2</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer7}</td>
                    <td data-label="diamond">2</td>
                    <td data-label="gold">2</td>
                    <td data-label="silver">1</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer8}</td>
                    <td data-label="diamond">2</td>
                    <td data-label="gold">2</td>
                    <td data-label="silver">1</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer9}</td>
                    <td data-label="diamond">6</td>
                    <td data-label="gold">3</td>
                    <td data-label="silver">2</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer10}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">-</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer11}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">-</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer12}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">-</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer13}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">✓</td>
                    <td data-label="silver">-</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer14}</td>
                    <td data-label="diamond">2</td>
                    <td data-label="gold">1</td>
                    <td data-label="silver">-</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer15}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">-</td>
                    <td data-label="silver">-</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer16}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">-</td>
                    <td data-label="silver">-</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer17}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">-</td>
                    <td data-label="silver">-</td>
                    <td data-label="digital">-</td>
                  </tr>
                  <tr>
                    <td data-label="Oportunidades">{Resources.sponsorshipPackages.offer18}</td>
                    <td data-label="diamond">✓</td>
                    <td data-label="gold">-</td>
                    <td data-label="silver">-</td>
                    <td data-label="digital">-</td>
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
