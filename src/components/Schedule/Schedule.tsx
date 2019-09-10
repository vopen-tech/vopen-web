import React from "react";
import classNames from "classnames";

import { Props, State } from "./types";
import styles from "./Schedule.module.scss";

export default class Schedule extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined,
    activities: undefined
  };

  constructor(props: Props) {
    super(props);
    const firstDay = this.props.activities && this.props.activities.days[0];
    const firstTrack = firstDay && firstDay.tracks[0];
    this.state = {
      selectedDayName: firstDay ? firstDay.name : "",
      selectedTrackName: firstTrack ? firstTrack.name : ""
    };
  }

  handleDayClick = (dayName: string) => {
    const { activities } = this.props;
    const selectedDay = activities.days.find(item => item.name === dayName) || { tracks: [] };
    const firstTrackName = selectedDay.tracks[0] ? selectedDay.tracks[0].name : "";

    this.setState({ selectedDayName: dayName, selectedTrackName: firstTrackName });
  };

  handleTrackClick = (trackName: string) => {
    this.setState({ selectedTrackName: trackName });
  };

  renderDaysHeader() {
    const { activities } = this.props;
    const { selectedDayName } = this.state;

    return (
      <div className={styles.daysHeader}>
        {activities.days.map(day => (
          <div
            key={day.name}
            className={classNames(styles.dayHeader, selectedDayName === day.name && styles.active)}
            tabIndex={0}
            role="presentation"
            onClick={() => this.handleDayClick(day.name)}
          >
            {day.name}
          </div>
        ))}
      </div>
    );
  }

  renderSelectedDayTracks() {
    const { activities } = this.props;
    const { selectedDayName, selectedTrackName } = this.state;
    const selectedDay = activities.days.find(item => item.name === selectedDayName);

    if (!selectedDay) {
      return null;
    }

    return (
      <div className={styles.dayTracks}>
        {selectedDay.tracks.map(track => (
          <div
            key={track.name}
            className={classNames(styles.trackHeader, selectedTrackName === track.name && styles.active)}
            tabIndex={0}
            role="presentation"
            onClick={() => this.handleTrackClick(track.name)}
          >
            {track.name}
          </div>
        ))}
      </div>
    );
  }

  renderSelectedDayAndSelectedTrackActivities() {
    const { activities } = this.props;
    const { selectedDayName, selectedTrackName } = this.state;
    const selectedDay = activities.days.find(item => item.name === selectedDayName);
    const selectedTrack = selectedDay && selectedDay.tracks.find(item => item.name === selectedTrackName);

    if (!selectedTrack) {
      return null;
    }

    return (
      <div className={styles.dayActivities}>
        {selectedTrack.activities.map(item => (
          <div className={styles.dayActivity}>
            <div className={styles.dayActivityHeader}>{item.title}</div>
            <div className={styles.dayActivityBody}>{item.description}</div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { className, activities } = this.props;
    const cssClasses = classNames(styles.schedule, className);

    if (!activities || !activities.days || !activities.days.length) {
      return null;
    }

    return (
      <div className={cssClasses}>
        {this.renderDaysHeader()}
        {this.renderSelectedDayTracks()}
        {this.renderSelectedDayAndSelectedTrackActivities()}
      </div>
    );
  }
}
