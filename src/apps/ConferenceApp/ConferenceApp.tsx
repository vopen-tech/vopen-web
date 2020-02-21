import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Header,
  Footer,
  NavLink,
  PageSection,
  HeroConf,
  About,
  CtaButtons,
  Sponsors,
  Speakers,
  Schedule,
  Team,
  Tickets,
  MapsLocation,
  Loading

} from "../../components";
import { ConductPage, SchedulePage } from "../../pages";
import { backendService, resourcesService, siteService } from "../../services";

import { IProps, IState } from "./types";
import styles from "./ConferenceApp.module.scss";
import { IEdition } from "../../types/IEdition";

const sortByName = (itemA: any, itemB: any) => {
  if (itemA.name < itemB.name) return -1;
  if (itemA.name > itemB.name) return 1;
  return 0;
};

const Home: React.SFC<any> = ({ conferenceInfo, globalInfo }: { conferenceInfo: IEdition; globalInfo: IEdition }) => {
  const Resources = resourcesService.getResources();

  const isTicketSaleEnabled = conferenceInfo.editionTickets && conferenceInfo.editionTickets.length > 0;
  const conferenceTitle = conferenceInfo.name.replace("vOpen", "").trim();

  const conferenceOrganizers = conferenceInfo.organizers ? conferenceInfo.organizers.sort(sortByName) : [];
  const conferenceSpeakers = conferenceInfo.speakers || [];
  const conferenceSponsors = conferenceInfo.sponsors || [];
  const conferenceActivities = conferenceInfo.activities || {};
  const isScheduleEnabled = conferenceActivities.days && conferenceActivities.days.length > 0;

  return (
    <>
      <HeroConf to="#about" subtitle={conferenceTitle} title={Resources.titles.homePage} type="odd">
        </HeroConf>
      <PageSection id="about"  type="even" className="pt6">
        <CtaButtons className="pv5"/>
      </PageSection>
      <PageSection id="speakers">
      <h2 className={styles.subtitle}>{Resources.pages.speakers}</h2>
        <Speakers speakers={conferenceSpeakers} />
      </PageSection>
      <PageSection className={styles.centeredColumn} id="sponsors">
      <h2 className={styles.subtitle}>{Resources.pages.sponsors}</h2>
        <Sponsors sponsors={conferenceSponsors} />
      </PageSection>
      {isTicketSaleEnabled && (
        <PageSection className={styles.centeredColumn} id="tickets" type="odd">
          <h2 className={styles.subtitle}>{Resources.pages.tickets}</h2>
          <Tickets tickets={conferenceInfo.editionTickets} />
        </PageSection>
      )}
      {isScheduleEnabled && (
        <PageSection id="schedule">
          <Schedule activities={conferenceActivities} />
        </PageSection>
      )}
      <PageSection id="team">
          <h2 className={styles.subtitle}>{Resources.pages.team}</h2>
        <Team team={conferenceOrganizers} />
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
      return <Loading />;
    }

    const Resources = resourcesService.getResources();

    return (
      <Router>
        <div className={styles.conferenceApp}>
          <Header type="odd">
            <NavLink to="/#schedule" />
            <NavLink to="/#speakers">{Resources.pages.speakers}</NavLink>
            <NavLink to="/#sponsors">{Resources.pages.sponsors}</NavLink>
            <NavLink className={Resources.buttons.wantToBeSpeaker} to="//vopen.tech">
              Global
            </NavLink>
          </Header>
          {/* Body */}
          <Route exact path="/" render={() => <Home conferenceInfo={conferenceData} globalInfo={globalData} />} />
          <Route path="/schedule" component={SchedulePage} />
          <Route path="/conduct" component={ConductPage} />
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
