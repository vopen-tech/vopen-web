import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import ReactGA from 'react-ga';
import { GlobalApp, ConferenceApp } from "./apps";

import "./styles/global.scss";

function getConferenceId(): string {
  let toReturn = "vopen-global";

  if (!!process.env.REACT_APP_CONFERENCE_APP) {
    toReturn = process.env.REACT_APP_CONFERENCE_APP;
  }

  const host = window.location.host;

  if (host.indexOf("localhost") === -1) {
    const hostParts = host.split(".");
    toReturn = `${hostParts[1]}-${hostParts[0]}`;
  }

  // Hack to match global site with global domain
  if (toReturn === "tech-vopen") {
    toReturn = "vopen-global";
  }

  // Hack until the subdomains are properly set up
  if (toReturn === "azurewebsites-vopen-prod-confs-win-app") {
    toReturn = "vopen-uy";
  }

  console.log(`Conference ID: ${toReturn}`);
  return toReturn;
}

function getTrackingId(conferenceId:string): string {
  const baseCode = "UA-49706206-";
  switch (conferenceId) {
    case "vopen-ar":
      return baseCode + "5";
    case "vopen-cl":
      return baseCode + "6";
    case "vopen-co":
      return baseCode + "7";
    case "vopen-pe":
      return baseCode + "8";
    case "vopen-uy":
      return baseCode + "9";
    case "vopen-global":
      return baseCode + "10";
    default:
      break;
  }
  return "";
}

const conferenceId = getConferenceId();

const trackingId = getTrackingId(conferenceId);
ReactGA.initialize(trackingId);

const WebsiteApp = conferenceId !== "vopen-global" ? ConferenceApp : GlobalApp;

ReactDOM.render(<WebsiteApp conferenceId={conferenceId} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
