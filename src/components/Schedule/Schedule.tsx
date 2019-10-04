import React from "react";
import classNames from "classnames";

import { Props, State } from "./types";
import styles from "./Schedule.module.scss";
import { IEditionActivity } from "../../types/IEditionActivities";

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
      selectedTrackName: firstTrack ? firstTrack.name : "",
      activitiesExpanded: []
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

  handleActivityExpandClick = (activityId: string) => {
    const { activitiesExpanded } = this.state;
    const result = activitiesExpanded.includes(activityId) ? activitiesExpanded.filter(item => item !== activityId) : activitiesExpanded.concat(activityId);

    this.setState({ activitiesExpanded: result });
  };

  renderDaysHeader() {
    const { activities } = this.props;
    const { selectedDayName } = this.state;

    if (!activities.days || activities.days.length === 1) {
      return null;
    }

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

    if (!selectedDay || selectedDay.tracks.length === 1) {
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
    const { selectedDayName, selectedTrackName, activitiesExpanded } = this.state;
    const selectedDay = activities.days.find(item => item.name === selectedDayName);
    const selectedTrack = selectedDay && selectedDay.tracks.find(item => item.name === selectedTrackName);

    if (!selectedTrack) {
      return null;
    }

    return (
      <div className={styles.dayActivities}>
        {selectedTrack.activities.map((activity: IEditionActivity) => {
          const timeArray = new Date(activity.date).toLocaleTimeString().split(":");
          const activityTime = `${timeArray[0]}:${timeArray[1]}`;
          const activityPresenters = activity.presenters.map(item => item.name).join(", ");
          const activityTags = activity.tags && activity.tags.split(",").map(item => item.trim());

          const isActivityExpanded = !!activitiesExpanded.includes(activity.id);
          const expandCssClass = isActivityExpanded ? "fas fa-minus" : "fas fa-plus";

          const isTalk = activity.type.toUpperCase() === "TALK" || activity.type.toUpperCase() === "KEYNOTE";
          const activityCssClass = classNames(styles.dayActivity, !isTalk && styles.nonTalkActivity);

          return (
            <div key={activity.id} className={activityCssClass}>
              <div className={styles.dayActivityHeader}>
                <div className={styles.time}>{activityTime}</div>
                <div className={styles.title}>{activity.title}</div>
                <div className={styles.presenters}>{activityPresenters}</div>
                {activity.description && <i className={`${styles.expand} ${expandCssClass}`} onClick={() => this.handleActivityExpandClick(activity.id)} />}
              </div>
              {isTalk && (
                <div className={styles.dayActivityBody}>
                  <div className={styles.tags}>
                    {activity.level && <div className={styles.level}>{activity.level}</div>}
                    {activityTags &&
                      activityTags.map(tag => (
                        <div key={tag} className={styles.tag}>
                          {tag}
                        </div>
                      ))}
                  </div>
                </div>
              )}
              {isActivityExpanded && <div className={styles.dayActivityFooter}>{activity.description}</div>}
            </div>
          );
        })}
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
