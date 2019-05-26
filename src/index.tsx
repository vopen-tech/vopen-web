import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { GlobalApp, ConferenceApp } from "./pages";

import "./styles/global.scss";

const WebsiteComponent = process.env.REACT_APP_CONFERENCE_APP === "true" ? ConferenceApp : GlobalApp;
ReactDOM.render(<WebsiteComponent />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
