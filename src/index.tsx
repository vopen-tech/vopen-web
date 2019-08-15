import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { GlobalApp, ConferenceApp } from "./apps";

import "./styles/global.scss";
const VOPEN_GLOBAL_ID = "vopen-global-2019";

function getConferenceId(): string {
  let toReturn = VOPEN_GLOBAL_ID;

  if (!!process.env.REACT_APP_CONFERENCE_APP) {
    toReturn = process.env.REACT_APP_CONFERENCE_APP;
  }

  const host = window.location.host;

  if (host.indexOf("localhost") === -1) {
    const hostParts = host.split(".");
    toReturn = `${hostParts[1]}-${hostParts[0]}-2019`;
  }

  // Hack to match global site with global domain
  if (toReturn === "tech-vopen-2019") {
    toReturn = VOPEN_GLOBAL_ID;
  }

  console.log(`Conference ID: ${toReturn}`);
  return toReturn;
}

const conferenceId = getConferenceId();
const WebsiteApp = conferenceId !== VOPEN_GLOBAL_ID ? ConferenceApp : GlobalApp;
ReactDOM.render(<WebsiteApp conferenceId={conferenceId} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
