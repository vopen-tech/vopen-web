import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Header,
  Footer,
  NavLink,
  PageSection,
  Banner,
  About,
  Sponsors,
  Speakers,
  InfoIcon,
  Team,
  Tickets,
  MapsLocation,
  ActionButton,
  SponsorshipPackages,
  LanguageSelector
} from "../../components";
import { Conduct, Schedule } from "../../pages";
import { backendService, resourcesService } from "../../services";

import { IProps, IState } from "./types";
import styles from "./ConferenceApp.module.scss";
import { IEdition } from "../../types/IEdition";
import constants from "../../constants";

const sortByName = (itemA: any, itemB: any) => {
  if (itemA.name < itemB.name) return -1;
  if (itemA.name > itemB.name) return 1;
  return 0;
};

const Home: React.SFC<any> = ({ conferenceInfo, globalInfo }: { conferenceInfo: IEdition; globalInfo: IEdition }) => {
  const Resources = resourcesService.getResources();

  const conferenceTitle = conferenceInfo.name.replace("vOpen", "").trim();
  const conferenceDate = conferenceInfo.date || Resources.banner.soon;

  const isTicketSaleOpen = conferenceInfo.ticketsInfos && conferenceInfo.ticketsInfos.length > 0;
  const conferenceTicketSaleStatus = isTicketSaleOpen ? Resources.banner.ticketsOnSale : Resources.banner.ticketsSignUp;
  const conferenceTicketsLink = isTicketSaleOpen ? "/#tickets" : constants.rsvpUrl;

  const conferenceOrganizers = conferenceInfo.organizers ? conferenceInfo.organizers.sort(sortByName) : [];
  const globalOrganizers = globalInfo.organizers ? globalInfo.organizers.sort(sortByName) : [];

  return (
    <>
      <Banner to="#about" title={conferenceTitle}>
        <InfoIcon type="location" title={conferenceInfo.locationName} linkUrl="/#location" />
        <InfoIcon type="date" title={conferenceDate} subtitle={""} />
        <InfoIcon type="speakers" title={Resources.banner.speakersTitle} subtitle={Resources.banner.speakersDescription} linkUrl="/#speakers" />
        <InfoIcon type="tickets" title={Resources.banner.ticketsTitle} subtitle={conferenceTicketSaleStatus} linkUrl={conferenceTicketsLink} />
      </Banner>
      <PageSection id="about" title="About">
        <About />
      </PageSection>
      <PageSection id="speakers" title="Speakers" type="odd">
        <Speakers />
      </PageSection>
      <PageSection className={styles.centeredColumn} id="sponsors" title="Sponsors">
        <div className={styles.centeredText}>
          <ActionButton type="tertiary" text={Resources.buttons.wantToBeSponsors} url={constants.sponsorsCallUrl} />
        </div>
        <SponsorshipPackages type="odd" />
        <Sponsors title={Resources.titles.sponsorPage} />
      </PageSection>
      {conferenceInfo.ticketsInfos && conferenceInfo.ticketsInfos.length && (
        <PageSection className={styles.centeredColumn} id="tickets" title={Resources.pages.tickets} type="primary">
          <Tickets ticketsInfos={conferenceInfo.ticketsInfos} />
        </PageSection>
      )}
      <PageSection id="team" title={Resources.pages.team} type="odd">
        <Team team={conferenceOrganizers} type="odd" />
        <h4 className={styles.centeredText} style={{ margin: "35px 0" }}>
          {Resources.titles.globalTeam}
        </h4>
        <Team team={globalOrganizers} type="odd" />
      </PageSection>
      <PageSection id="location" type="full">
        <MapsLocation address={conferenceInfo.locationFullAddress} />
      </PageSection>
    </>
  );
};

export default class ConferenceApp extends React.PureComponent<IProps, IState> {
  state: IState = {
    conferenceData: undefined,
    globalData: undefined
  };

  async componentDidMount() {
    const { conferenceId } = this.props;

    if (!conferenceId) {
      console.error("No conference ID set up");
    }

    const [conferenceData, globalData] = await Promise.all([backendService.fetchConference(conferenceId), backendService.fetchConference("vopen-global-2019")]);
    this.setState({ conferenceData, globalData });
  }

  render() {
    const { conferenceData, globalData } = this.state;

    if (!conferenceData || !globalData) {
      return null;
    }

    const Resources = resourcesService.getResources();

    return (
      <Router>
        <div className={styles.conferenceApp}>
          <Header>
            <NavLink to="/schedule" />
            <NavLink to="/#speakers">{Resources.pages.speakers}</NavLink>
            <NavLink to="/#sponsors">{Resources.pages.sponsors}</NavLink>
            <NavLink className={styles.externalNavLink} to="//vopen.tech">
              Global
            </NavLink>
            <LanguageSelector />
          </Header>
          {/* Body */}
          <Route exact path="/" render={() => <Home conferenceInfo={conferenceData} globalInfo={globalData} />} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/conduct" component={Conduct} />
          <Route path="/team" component={Team} />
          {/* End body */}
          <Footer>
            <NavLink activeClassName={styles.navActive} className={styles.navLink} to="/conduct">
              {Resources.pages.codeOfConduct}
            </NavLink>
          </Footer>
        </div>
      </Router>
    );
  }
}
