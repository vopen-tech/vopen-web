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
  MapsLocation,
  ActionButton,
  SponsorshipPackages,
  LanguageSelector
} from "../../components";
import { Conduct, Schedule } from "../../pages";
import { backendService } from "../../services";

import { IProps, IState } from "./types";
import styles from "./ConferenceApp.module.scss";
import { IEdition } from "../../types/IConference";
import constants from "../../constants";

const sortByName = (itemA: any, itemB: any) => {
  if (itemA.name < itemB.name) return -1;
  if (itemA.name > itemB.name) return 1;
  return 0;
};

const Home: React.SFC<any> = ({ conferenceInfo, globalInfo }: { conferenceInfo: IEdition; globalInfo: IEdition }) => {
  const conferenceLocation = conferenceInfo.location || {};
  const conferenceDate = conferenceInfo.date || "Próximamente";
  const conferenceTicketSaleStatus = conferenceInfo.ticketsInfo.isTicketSaleOpen ? "Entradas a la venta" : "Próximamente";
  const conferenceOrganizers = conferenceInfo.organizers ? conferenceInfo.organizers.sort(sortByName) : [];

  const globalOrganizers = globalInfo.organizers ? globalInfo.organizers.sort(sortByName) : [];

  return (
    <>
      <Banner to="#about" title={conferenceInfo.name}>
        <InfoIcon type="location" title={conferenceLocation.venueName} subtitle={conferenceLocation.description} linkUrl="/#location" />
        <InfoIcon type="date" title={conferenceDate} subtitle={""} />
        <InfoIcon type="speakers" title="Speakers" subtitle="Los mejores expertos" linkUrl="/#speakers" />
        <InfoIcon type="tickets" title="Lugares limitados!" subtitle={conferenceTicketSaleStatus} />
      </Banner>
      <PageSection id="about" title="About">
        <About />
      </PageSection>
      <PageSection id="speakers" title="Speakers" type="odd">
        <Speakers />
      </PageSection>
      <PageSection className={styles.centeredColumn} id="sponsors" title="Sponsors">
        <div className={styles.centeredText}>
          <ActionButton type="tertiary" text="Quiero ser sponsor" url={constants.sponsorsCallUrl} />
        </div>
        <SponsorshipPackages type="odd" />
        <Sponsors title="Quienes nos acompañan" />
      </PageSection>
      <PageSection id="team" title="Equipo" type="odd">
        <Team team={conferenceOrganizers} type="odd" />
        <h4 className={styles.centeredText} style={{ margin: "35px 0" }}>
          Equipo global
        </h4>
        <Team team={globalOrganizers} type="odd" />
      </PageSection>
      <PageSection id="location" type="full">
        <MapsLocation address={conferenceLocation.fullAddress} />
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

    const [conferenceData, globalData] = await Promise.all([backendService.fetchConference(conferenceId), backendService.fetchConference("vopen-global")]);
    this.setState({ conferenceData, globalData });
  }

  render() {
    const { conferenceData, globalData } = this.state;

    if (!conferenceData || !globalData) {
      return null;
    }

    const lastEdition = conferenceData.editions[0];
    const globalEdition = globalData.editions[0];

    return (
      <Router>
        <div className={styles.conferenceApp}>
          <Header>
            <NavLink to="/schedule">Agenda</NavLink>
            <NavLink to="/#speakers">Speakers</NavLink>
            <NavLink to="/#sponsors">Sponsors</NavLink>
            <NavLink className={styles.externalNavLink} to="//vopen.tech">
              Global
            </NavLink>
            {/* <LanguageSelector /> */}
          </Header>
          {/* Body */}
          <Route exact path="/" render={() => <Home conferenceInfo={lastEdition} globalInfo={globalEdition} />} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/conduct" component={Conduct} />
          <Route path="/team" component={Team} />
          {/* End body */}
          <Footer>
            <NavLink activeClassName={styles.navActive} className={styles.navLink} to="/conduct">
              Código de conducta
            </NavLink>
          </Footer>
        </div>
      </Router>
    );
  }
}
