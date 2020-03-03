import siteService from "./siteService";
import enUs from "../resources/en-US.json";
import esMX from "../resources/es-MX.json";
import esAr from "../resources/es-AR.json";

function getResources() {
  const currentLanguageAndRegion = siteService.getSiteLanguageAndRegion();

  switch (currentLanguageAndRegion) {
    case "en-US":
      return enUs;
    case "es-MX":
      return esMX;
    case "es-AR":
    default:
      return esAr;
  }
}

function getDateFormatted(date: string, format?: any) {
  const languageAndRegion = siteService.getSiteLanguageAndRegion();
  const dateFormat = format || { day: "2-digit", month: "2-digit" };
  return new Date(date).toLocaleDateString(languageAndRegion, dateFormat);
}

export default { getResources, getDateFormatted };
