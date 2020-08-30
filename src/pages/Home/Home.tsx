import React from "react";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { siteService, resourcesService } from "../../services";
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

class Home extends React.PureComponent<IProps> {
  render() {
    const Resources = resourcesService.getResources();

    if (this.props.showError) {
      const { error, errorDescription } = this.props.session;
      console.log(`Error on user login. Code: ${error} - Description: ${errorDescription}`);
      this.props.addToast(Resources.info.errorLogin, { appearance: "error", autoDismiss: true });
      this.props.dispatch({ type: "LOGIN_FAILED_MESSAGE_SHOWN" });
    }

    return (
      <div className={styles.home}>
        {this.props.session && this.props.session.user && this._showWelcome(Resources)}
        {siteService.mustSetUpCountDown() && (
          <CountDown deadline={new Date(2020, 9, 3, 9, 0, 0)} current={new Date()} register={() => (window.location.href = Constants.loginUrl)} />
        )}
        <Banner to="#about" title={Resources.titles.homePage} subtitle={Resources.subtitles.homePage} type="even"></Banner>
        <PageSection id="about">
          <About />
          <History />
          <CtaButtons className="pv5-l pv4" />
        </PageSection>
      </div>
    );
  }

  _showWelcome(Resources: any) {
    return (
      <h2 className={styles.welcome}>
        {Resources.info.newUser.split(".").map((line: string) => (
          <>
            <h3 className={styles.line}>{line}</h3>
            <br />
          </>
        ))}
      </h2>
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
