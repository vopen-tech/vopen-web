import React from "react";
import ReactDOM from "react-dom";
import { siteService } from "./services";
import * as serviceWorker from "./serviceWorker";
import { GlobalApp, ConferenceApp } from "./apps";

import "./styles/global.scss";

const conferenceId = siteService.getConferenceId();
const globalConferenceId = siteService.getGlobalConferenceId();
console.log(`Conference ID: ${conferenceId}`);

const WebsiteApp: any = conferenceId !== globalConferenceId ? ConferenceApp : GlobalApp;
ReactDOM.render(<WebsiteApp conferenceId={conferenceId} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
