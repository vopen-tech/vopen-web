import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Header,
  Footer,
  NavLink,
  PageSection,
  HeroConf,
  CtaButtons,
  Sponsors,
  Speakers,
  Team,
  Tickets,
  MapsLocation,
  Loading,
  ActionButton
} from "../../components";
import { ConductPage, SchedulePage, SponsorsPage } from "../../pages";
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
  const conferenceOrganizers = conferenceInfo.organizers ? conferenceInfo.organizers.sort(sortByName) : [];
  const globalOrganizers = globalInfo.organizers ? globalInfo.organizers.sort(sortByName) : [];
  const conferenceSpeakers = conferenceInfo.speakers || [];
  const conferenceSponsors = conferenceInfo.sponsors || [];

  return (
    <>
      <HeroConf conferenceInfo={conferenceInfo} type="odd" />
      <PageSection id="about" type="even" className="pt6-l pt5">
        <CtaButtons className="pt4-l pt0" />
      </PageSection>
      <PageSection id="speakers">
        <div className={styles.banner}>
          <h1 className={styles.tag}>{Resources.pages.speakers}</h1>
          <h2 className={styles.subtitle}>{Resources.titles.sloganSpeakers}</h2>
        </div>
        <Speakers speakers={conferenceSpeakers} />
      </PageSection>
      <PageSection className="tc bg-near-white" id="sponsors">
        <div className={styles.banner}>
          <h1 className={styles.tag}>{Resources.pages.sponsors}</h1>
          <h2 className={styles.subtitle}>{Resources.titles.sloganSponsors}</h2>
          <div className="pt4">
            <ActionButton type="secondary" text={Resources.buttons.learnMore} url="/sponsorship" target="_self" />
          </div>
        </div>
        <Sponsors sponsors={conferenceSponsors} />
      </PageSection>
      {isTicketSaleEnabled && (
        <PageSection className={styles.centeredColumn} id="tickets" type="odd">
          <div className={styles.banner}>
            <h1 className={styles.subtitle}>{Resources.pages.tickets}</h1>
          </div>
          <Tickets tickets={conferenceInfo.editionTickets} />
        </PageSection>
      )}
      <PageSection id="team">
        <div className={styles.banner}>
          <h1 className={styles.tag}>{Resources.pages.team}</h1>
          <h2 className={styles.subtitle}>{Resources.titles.sloganTeam}</h2>
        </div>
        <Team team={conferenceOrganizers} className="pt4" />
        <div className={styles.banner}>
          <h1 className={styles.tag}>{Resources.titles.teamGlobal}</h1>
        </div>
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
      return <Loading />;
    }

    const Resources = resourcesService.getResources();

    const conferenceActivities = conferenceData.activities || {};
    const isScheduleEnabled = conferenceActivities.days && conferenceActivities.days.length > 0;

    return (
      <Router>
        <div className={styles.conferenceApp}>
          <Header type="odd">
            {isScheduleEnabled && <NavLink to="/schedule">{Resources.pages.schedule}</NavLink>}
            <NavLink to="/#speakers">{Resources.pages.speakers}</NavLink>
            <NavLink to="/#sponsors">{Resources.pages.sponsors}</NavLink>
            <NavLink to="/conduct"> {Resources.pages.codeOfConduct}</NavLink>
            <NavLink className={Resources.buttons.wantToBeSpeaker} to="//vopen.tech">
              Global
            </NavLink>
          </Header>
          {/* Body */}
          <Route exact path="/" render={() => <Home conferenceInfo={conferenceData} globalInfo={globalData} />} />
          <Route path="/sponsorship" render={() => <SponsorsPage />} />
          <Route path="/schedule" render={() => <SchedulePage activities={conferenceActivities} />} />
          <Route path="/conduct" component={ConductPage} />
          <Route path="/team" component={Team} />
          {/* End body */}
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}
