import React from "react";
import { IProps, IState } from "./types";
import styles from "./CountDown.module.scss";
import { resourcesService } from "../../services";
import { getDiffInTimeFormat, formatToTwoDigits } from "./utils";

export default class CountDown extends React.PureComponent<IProps, IState> {

  static defaultProps: Partial<IProps> = {
    deadline: new Date(),
    current: new Date(),
  };

  state: IState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  countdownInterval: NodeJS.Timeout | undefined = undefined;
  resources: any = resourcesService.getResources();

  componentDidMount() {
    const { deadline, current } = this.props;
    const diff = getDiffInTimeFormat(deadline, current);

    this.setState({ ...diff }, this.setCountDownInterval);
  }

  componentWillUnmount() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  setCountDownInterval(): void {
    this.countdownInterval = setInterval(() => {
      const { deadline } = this.props;
      const diff = getDiffInTimeFormat(deadline, new Date());
  
      this.setState({ ...diff });
    }, 1000);
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
            <span id="hours">{formatToTwoDigits(this.state.hours)}</span>
            {this.resources.info.hours}
          </li>
          <li className={styles.item}>
            <span id="minutes">{formatToTwoDigits(this.state.minutes)}</span>
            {this.resources.info.minutes}
          </li>
          <li className={styles.item}>
            <span id="seconds">{formatToTwoDigits(this.state.seconds)}</span>
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
}
