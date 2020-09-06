import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { IProps } from "./types";
import styles from "./UserPage.module.scss";
import { resourcesService } from "../../services";
import { loadUserProfile } from "../../redux/actions/session";

class UserPage extends React.PureComponent<IProps> {
  private Resources: any = resourcesService.getResources();

  state = {
    redirectToEditProfile: false,
  };

  componentDidMount() {
    this.props.dispatch(loadUserProfile());
  }

  render() {
    if (this.state.redirectToEditProfile) return <Redirect to="/edit-profile" />;

    const { session } = this.props;

    return <>{session && session.user ? this._showWelcome() : <Redirect to="/" />}</>;
  }

  _showWelcome() {
    return (
      <div className={styles.userpage}>
        <h2 className={styles.welcome}>
          {this.Resources.info.newUser.split(".").map((line: string) => (
            <>
              <h3 className={styles.line}>{line}</h3>
              <br />
            </>
          ))}
        </h2>
        <div className="w-third-l w-100 pa3">
          <div className={styles.action} onClick={() => this.setState({ redirectToEditProfile: true })}>
            <h1 className="ttu f2 mv0">{this.Resources.titles.editProfile}</h1>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state: any) => {
  return {
    session: state.session.session,
  };
};

export default connect(mapStateToProps)(UserPage);
