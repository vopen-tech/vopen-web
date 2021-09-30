import React from "react";
import { connect } from "react-redux";
import { backendService, siteService } from "../../services";
import { IProps } from "./types";
import { INotification } from "../../types/INotification";
import styles from "./SponsorNotification.module.scss";
import { Notifications } from "../../components";

class SponsorNotification extends React.PureComponent<IProps> {
  state = {
    sponsor: "",
    password: "",
    message: "",
    title: "",
    authenticated: false,
    error: null
  };

  componentDidMount() {
    var sponsor = siteService.getSponsor();

    if (sponsor) {
      this.setState({ sponsor, authenticated: true }, () => {
        // this._loadNotifications();
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.authenticated && (
          <div className={styles.form}>
            <input className={styles.input} placeholder="Sponsor" value={this.state.sponsor} onChange={this._onChangeSponsor.bind(this)} />
            <input className={styles.input} placeholder="Password" value={this.state.password} onChange={this._onChangePassword.bind(this)} />
            {this.state.error && <span>{this.state.error}</span>}
            <button className={styles.button} onClick={this._onLogin.bind(this)}>
              Login
            </button>
          </div>
        )}
        {this.state.authenticated && (
          <div className={styles.form}>
            <input className={styles.input} placeholder="Título" value={this.state.title} onChange={this._onChangeTitle.bind(this)} />
            <textarea className={styles.text} placeholder="Mensaje" value={this.state.message} onChange={this._onChangeMessage.bind(this)} />
            <button className={styles.button} onClick={this._onPostMessage.bind(this)}>
              Enviar
            </button>
            <Notifications notifications={this.props.notifications} isSponsor={true} />
          </div>
        )}
      </div>
    );
  }

  _onChangeSponsor(evt: any): void {
    this.setState({ sponsor: evt.target.value });
  }

  _onChangePassword(evt: any): void {
    this.setState({ password: evt.target.value });
  }

  _onChangeMessage(evt: any): void {
    this.setState({ message: evt.target.value });
  }

  _onChangeTitle(evt: any): void {
    this.setState({ title: evt.target.value });
  }

  _onLogin() {
    const validSponsor = siteService.loginSponsor(this.state.sponsor, this.state.password);    

    if (validSponsor) {
      this.setState({ authenticated: true, error: null }, () => {
        // this._loadNotifications();
      });
    } else {
      this.setState({ error: "Invalid login" });
    }
  }

  // async _loadNotifications() {
  //   const notifications = await backendService.getSponsorNotification(this.state.sponsor);

  //   this.props.dispatch({
  //     type: "SPONSOR_NOTIFICATIONS_UPDATED",
  //     payload: notifications,
  //   });
  // }

  async _onPostMessage() {
    try {
      const notification: INotification | undefined = {
        sponsor: this.state.sponsor,
        message: this.state.message,
        title: this.state.title,
        partitionKey: undefined,
        rowKey: undefined,
        eTag: undefined,
        timestamp: undefined,
        reads: undefined,
      };

      // await backendService.pushNotification(notification);
      // this._loadNotifications();
    } catch (error) {
      console.log(error);
    }
  }
}

let mapStateToProps = (state: any) => {
  return {
    // notifications: state.notifications.sponsorNotifications
  };
};

export default connect(mapStateToProps)(SponsorNotification);
