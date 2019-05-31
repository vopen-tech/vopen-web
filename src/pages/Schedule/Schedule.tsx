import React from "react";
import { backendService } from "../../services";
import styles from "./Schedule.module.scss";
import { IProps, IState } from "./types";

export default class schedule extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { schedule: undefined };
  }

  async componentDidMount() {
    const schedule = await backendService.fetchSchedule();
    this.setState({ schedule });
  }

  render() {
    return <div className={styles.agenda}>schedule</div>;
  }
}
