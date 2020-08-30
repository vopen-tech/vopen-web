import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { siteService } from "./services";
import * as serviceWorker from "./serviceWorker";
import { GlobalApp, ConferenceApp } from "./apps";
import { overrideCssVariablesValuesWithCountryValues } from "./utils";
import store from "./redux/store";
import { ToastProvider } from "react-toast-notifications";

import "./styles/global.scss";
overrideCssVariablesValuesWithCountryValues();

const conferenceId = siteService.getConferenceId();
const globalConferenceId = siteService.getGlobalConferenceId();

console.log(`Conference ID: ${conferenceId}`);
console.log(`Country: ${siteService.getConferenceCountry()}`);
console.log(`Language: ${siteService.getSiteLanguageAndRegion()}`);

// Redirect to global vopen site if you are in a local site
const isLocalhost = window.location.host.indexOf("localhost") !== -1;
if (!isLocalhost && conferenceId !== globalConferenceId) {
  window.location.replace("https://vopen.tech");
} else {
  const WebsiteApp: any = conferenceId !== globalConferenceId ? ConferenceApp : GlobalApp;
  ReactDOM.render(
    <Provider store={store}>
      <ToastProvider>
        <WebsiteApp conferenceId={conferenceId} />
      </ToastProvider>
    </Provider>,
    document.getElementById("root")
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
