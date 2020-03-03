function getSiteLanguageAndRegion(): string {
  const language = (window.localStorage && window.localStorage.getItem("siteLanguage")) || "en";

  if (language === "en") {
    return "en-US";
  }

  // Region is recalculated based on the website/country
  const country = getConferenceCountry();
  const languageAndRegion = `es-${country.toUpperCase()}`;

  return languageAndRegion;
}

function setSiteLanguage(language: string): void {
  if (window.localStorage) {
    console.log(`Site language: ${language}`);
    window.localStorage.setItem("siteLanguage", language);
  }
}

function getGlobalConferenceId() {
  return "vopen-global-2019";
}

function getConferenceId(): string {
  const globalConferenceId = getGlobalConferenceId();
  let toReturn = globalConferenceId;

  if (!!process.env.REACT_APP_CONFERENCE_APP) {
    toReturn = process.env.REACT_APP_CONFERENCE_APP;
  }

  const host = window.location.host;

  if (host.indexOf("localhost") === -1) {
    const hostParts = host.split(".");
    toReturn = `${hostParts[1]}-${hostParts[0]}-2019`;
  }

  // Hack for Colombia
  if (toReturn === "vopen-co-2019") {
    toReturn = "vopen-co-2020";
  }

  // Hack to match global site with global domain
  if (toReturn === "tech-vopen-2019") {
    toReturn = globalConferenceId;
  }

  return toReturn;
}

function getConferenceCountry() {
  const conferenceId = getConferenceId();
  return conferenceId.split("-")[1] || "global";
}

export default {
  getGlobalConferenceId,
  getConferenceCountry,
  getConferenceId,
  getSiteLanguageAndRegion,
  setSiteLanguage
};
