import React from "react";
import { SchedulePage } from "../../pages";
import {
  PageSection,
  HeroConf,
  Sponsors,
  Speakers,
  Loading
} from "../../components";
import { backendService, resourcesService, siteService } from "../../services";
import { IEdition } from "../../types/IEdition";
import { IProps, IState } from "./types";
import styles from "./VirtualConferencePage.module.scss";

const Home: React.SFC<any> = ({ conferenceInfo, globalInfo }: { conferenceInfo: IEdition; globalInfo: IEdition }) => {
  const Resources = resourcesService.getResources();
  const conferenceSpeakers = conferenceInfo.speakers || [];
  const conferenceSponsors = conferenceInfo.sponsors || [];
  const conferenceActivities = conferenceInfo.activities || {};

  return (
    <>
      <HeroConf conferenceInfo={conferenceInfo} type="odd" />
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

export default class VirtualConferencePage extends React.PureComponent<IProps, IState> {
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
        <Home conferenceInfo={conferenceData} globalInfo={globalData} />
      </div>
    );
  }
}
