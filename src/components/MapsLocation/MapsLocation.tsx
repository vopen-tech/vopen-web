import React from "react";
import { IProps, IState } from "./types";
import styles from "./MapsLocation.module.scss";
import { ArrowBottom } from "../SVGs";

export default class MapsLocation extends React.PureComponent<IProps, IState> {
  private mapRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.mapRef = React.createRef();
  }

  render() {
    const { address } = this.props;
    const width = "100%";
    const height = "696";
    const encodedAddress = encodeURI(address);
    const GOOGLE_API_KEY = "AIzaSyBWJQp6zon7nYdlX7xPrXQ_FNwAiRIZWNo";
    const src = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=${encodedAddress}`;

    return (
      <div className={styles.mapsLocation}>
        <a href="/#">
          <ArrowBottom className={styles.arrowUp} />
        </a>
        <iframe width={width} height={height} src={src} frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} />
      </div>
    );
  }
}
