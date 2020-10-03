import React from "react";
import { connect } from "react-redux";
import { SchedulePage } from "../../pages";
import { PageSection, HeroConf, Sponsors, Speakers, Loading, Notifications } from "../../components";
import { backendService, resourcesService, siteService } from "../../services";
import { IEdition } from "../../types/IEdition";
import { IProps, IState } from "./types";
import styles from "./VirtualConferencePage.module.scss";
import { INotification } from "../../types/INotification";

const Home: React.SFC<any> = ({ conferenceInfo, session, notifications }: { conferenceInfo: IEdition; session: any; notifications: INotification[] }) => {
  const Resources = resourcesService.getResources();
  const conferenceSpeakers = conferenceInfo.speakers || [];
  const conferenceSponsors = conferenceInfo.sponsors || [];
  const conferenceActivities = conferenceInfo.activities || {};

  return (
    <>
      <HeroConf conferenceInfo={conferenceInfo} session={session} type="odd" />
      {session && (
        <PageSection id="notifications">
          <Notifications notifications={notifications} isSponsor={false}/>
        </PageSection>
      )}
      <PageSection id="schedule">
        <SchedulePage activities={conferenceActivities} />
      </PageSection>
      <PageSection id="speakers">
        <div className={styles.banner}>
          <h1 className={styles.tag}>{Resources.pages.speakers}</h1>
          <h2 className={styles.subtitle}>{Resources.titles.sloganSpeakers}</h2>
        </div>
        <Speakers speakers={conferenceSpeakers} />
      </PageSection>
      <PageSection className="tc bg-near-white" id="sponsors">
        <Sponsors sponsors={conferenceSponsors} />
      </PageSection>
    </>
  );
};

class VirtualConferencePage extends React.PureComponent<IProps, IState> {
  state: IState = {
    conferenceData: undefined,
    globalData: undefined,
  };

  async componentDidMount() {
    const conferenceId = siteService.getConferenceId();
    const { conferenceData, globalData } = this.state;

    if (!conferenceId) {
      console.error("No conference ID set up");
    }

    if (!conferenceData || !globalData) {
      const [conferenceData, globalData] = await Promise.all([
        backendService.fetchConference(conferenceId),
        backendService.fetchConference("vopen-global-2020"),
      ]);
      this.setState({ conferenceData, globalData });
    }
  }

  render() {
    const { conferenceData, globalData } = this.state;

    if (!conferenceData || !globalData) {
      return <Loading />;
    }

    const Resources = resourcesService.getResources();

    return (
      <div className={styles.conferenceApp}>
        <Home conferenceInfo={conferenceData} session={this.props.session} notifications={this.props.notifications || []}/>
      </div>
    );
  }
}

let mapStateToProps = (state: any) => {
  return {
    notifications: state.notifications.notifications,
    session: state.session.session,
  };
};

export default connect(mapStateToProps)(VirtualConferencePage);
