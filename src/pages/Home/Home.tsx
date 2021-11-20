import React from "react";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { backendService, siteService, resourcesService } from "../../services";
import { IProps } from "./types";
import { PageSection, Banner, About, History, CtaButtons, CountDown } from "../../components";
import Constants from "../../constants";
import styles from "./Home.module.scss";

function withToast(Component: typeof React.Component) {
  return function WrappedComponent(props: any) {
    const toastFuncs = useToasts();
    return <Component {...props} {...toastFuncs} />;
  };
}

const tags = [
  "#GCP",
  "#AWS",
  "#Azure",
  "#AlibabaCloud",
  "#DevOps",
  "#AI",
  "#BusinessIntelligence",
  "#Talent",
  "#IoT",
  "#TDD",
  "#NodeJS",
  "#NetCore",
  "#Java",
  "#ReactJS",
  "#Android",
  "#Architecture",
  "#Networking"
];

class Home extends React.PureComponent<IProps> {

  render() {
    const Resources = resourcesService.getResources();

    if (this.props.showError) {
      const { error, errorDescription } = this.props.session;
      console.log(`Error on user login. Code: ${error} - Description: ${errorDescription}`);
      this.props.addToast(Resources.info.errorLogin, { appearance: "error", autoDismiss: true });
      this.props.dispatch({ type: "LOGIN_FAILED_MESSAGE_SHOWN" });
    }

    const deadlineDate = new Date("2021-11-18T12:00:00.000Z"); // 11/20/2021 9:00 (GMT -3)
    const currentDate = new Date();

    return (
      <div className={styles.home}>
        {
          (currentDate > deadlineDate) && (
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/yHhWCmmGCUU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen></iframe>
          )
        }
        {
          (currentDate <= deadlineDate) && siteService.mustSetUpCountDown() && (
            <CountDown deadline={deadlineDate} current={currentDate} register={() => (window.location.href = Constants.loginUrl)} />
          )
        }
        {/* <CtaButtons className="pv5-l pv4" /> */}
        {/* Tags section */}
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div key={tag} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
        <Banner to="#about" title={Resources.titles.homePage} subtitle={Resources.subtitles.homePage} type="even"></Banner>
        <PageSection id="about">
          <About />
          <History />
        </PageSection>
      </div>
    );
  }
}

let mapStateToProps = (state: any) => {
  return {
    session: state.session.session,
    showError: state.session.showError,
  };
};

export default connect(mapStateToProps)(withToast(Home));
