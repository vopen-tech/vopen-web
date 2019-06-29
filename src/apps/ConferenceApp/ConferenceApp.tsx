import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer, NavLink, PageSection, Banner, About, Sponsors, Speakers, InfoIcon, MapsLocation } from "../../components";
import { Conduct, Schedule, Team } from "../../pages";
import { backendService } from "../../services";

import { IProps, IState } from "./types";
import styles from "./ConferenceApp.module.scss";
import { IEdition } from "../../types/IConference";

const Home: React.SFC<any> = ({ edition }: { edition: IEdition }) => {
  return (
    <div className={styles.home}>
      <Banner to="#about" title={edition.name}>
        <InfoIcon type="location" title={edition.location.venueName} subtitle={edition.location.description} linkUrl="/#location" />
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
      <PageSection id="location" type="full">
        <MapsLocation address={edition.location.fullAddress} />
      </PageSection>
    </div>
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
