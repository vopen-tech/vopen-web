import React from "react";
import { IProps, IState } from "./types";
import styles from "./CountDown.module.scss";
import constants from "../../constants";
import { resourcesService } from "../../services";
import NavLink from "../NavLink";

export default class CountDown extends React.PureComponent<IProps, IState> {
  private countDownInterval: any = null;
  private resources: any = resourcesService.getResources();

  static defaultProps: Partial<IProps> = {
    deadline: new Date(2020, 9, 3, 9, 0, 0),
    current: new Date(),
  };

  state: IState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount() {
    const { deadline, current } = this.props;
    const diff = this._getDiffInTimeFormat(deadline, current);

    this.setState({ ...diff }, this._setCountDownInterval);
  }

  componentWillUnmount() {
    clearInterval(this.countDownInterval);
  }

  render() {
    return (
      <div className={styles.countdown}>
        <h2 className={styles.header}>
          <span>vOpen 2020</span>
          <br />
          <span>{this.resources.titles.vOpenGlobalConference}</span>
        </h2>
        <h3 className={styles.subHeader}>{this.resources.info.deadLineText}</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span id="days">{this.state.days}</span>
            {this.resources.info.days}
          </li>
          <li className={styles.item}>
            <span id="hours">{this._formatToTwoDigits(this.state.hours)}</span>
            {this.resources.info.hours}
          </li>
          <li className={styles.item}>
            <span id="minutes">{this._formatToTwoDigits(this.state.minutes)}</span>
            {this.resources.info.minutes}
          </li>
          <li className={styles.item}>
            <span id="seconds">{this._formatToTwoDigits(this.state.seconds)}</span>
            {this.resources.info.seconds}
          </li>
        </ul>
        <span className={styles.title}>{this.resources.info.areYouReady}</span>
        <div className="w-third-l w-100 pa3">
          <div className={styles.action} onClick={() => this.props.register()}>
            <h1 className="ttu f2 mv0">{this.resources.titles.register}</h1>
          </div>
        </div>
      </div>
    );
  }

  private _formatToTwoDigits = (segment: number): string => (segment < 10 ? `0${segment}` : segment.toString());

  private _setCountDownInterval(): void {
    this.countDownInterval = setInterval(() => {
      const { deadline } = this.props;
      const diff = this._getDiffInTimeFormat(deadline, new Date());

      this.setState({ ...diff });
    }, 1000);
  }

  private _getDiffInTimeFormat = (target: Date, current: Date): any => this._convertMilisecondsToTime(this._getDiffInMiliseconds(target, current));

  private _getDiffInMiliseconds = (target: Date, current: Date): number => Math.abs(target.getTime() - current.getTime());

  private _convertMilisecondsToTime(duration: number): any {
    var seconds = Math.floor((duration / 1000) % 60);
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    var days = Math.floor(duration / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
