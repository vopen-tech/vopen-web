import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer, NavLink, PageSection, Banner, About, Sponsors, Speakers, InfoIcon, Team, MapsLocation } from "../../components";
import { Conduct, Schedule } from "../../pages";
import { backendService } from "../../services";

import { IProps, IState } from "./types";
import styles from "./ConferenceApp.module.scss";
import { IEdition } from "../../types/IConference";

const sortByName = (itemA: any, itemB: any) => {
  if (itemA.name < itemB.name) return -1;
  if (itemA.name > itemB.name) return 1;
  return 0;
};

const Home: React.SFC<any> = ({ edition }: { edition: IEdition }) => {
  const editionLocation = edition.location || {};
  const editionOrganizers = edition.organizers ? edition.organizers.sort(sortByName) : [];

  return (
    <>
      <Banner to="#about" title={edition.name}>
        <InfoIcon type="location" title={editionLocation.venueName} subtitle={editionLocation.description} linkUrl="/#location" />
        <InfoIcon type="date" title={edition.date || "Próximamente"} subtitle={""} />
        <InfoIcon type="speakers" title="Speakers" subtitle="Los mejores expertos" linkUrl="/#speakers" />
        <InfoIcon type="tickets" title="Lugares limitados!" subtitle={edition.ticketsInfo.isTicketSaleOpen ? "Entradas a la venta" : "Próximamente"} />
      </Banner>
      <PageSection id="about" title="About">
        <About />
      </PageSection>
      <PageSection id="speakers" title="Speakers" type="odd">
        <Speakers />
      </PageSection>
      <PageSection id="sponsors" title="Sponsors">
        <Sponsors />
      </PageSection>
      <PageSection id="team" title="Organizadores" type="odd">
        <Team team={editionOrganizers} type="odd" />
      </PageSection>
      <PageSection id="location" type="full">
        <MapsLocation address={editionLocation.fullAddress} />
      </PageSection>
    </>
  );
};

export default class ConferenceApp extends React.PureComponent<IProps, IState> {
  state: IState = {
    conferenceData: undefined
  };

  async componentDidMount() {
    const { conferenceId } = this.props;

    if (!conferenceId) {
      console.error("No conference ID set up");
    }

    const result = await backendService.fetchConference(conferenceId);
    this.setState({ conferenceData: result });
  }

  render() {
    const { conferenceData } = this.state;

    if (!conferenceData) {
      return null;
    }

    const lastEdition = conferenceData.editions[0];

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
          </Header>
          {/* Body */}
          <Route exact path="/" render={() => <Home edition={lastEdition} />} />
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
