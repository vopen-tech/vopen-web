import React from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { IProps } from "./types";
import styles from "./UserPage.module.scss";
import { resourcesService } from "../../services";
import { loadUserProfile } from '../../redux/actions/session';

class UserPage extends React.PureComponent<IProps> {

  componentDidMount() {
    this.props.dispatch(loadUserProfile());
  }

  render() {
    const { session } = this.props;
    const Resources = resourcesService.getResources();

    return (
      <>
        {
          session && session.user ?
          this._showWelcome(Resources) :
          <Redirect to="/" />
        }
      </>
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
    session: state.session.session
  }
}

export default connect(mapStateToProps)(UserPage);