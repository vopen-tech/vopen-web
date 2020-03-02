import siteService from "./siteService";
import enUs from "../resources/en-US.json";
import esMX from "../resources/es-MX.json";
import esAr from "../resources/es-AR.json";

function getResources() {
  const currentLanguage = siteService.getSiteLanguage();

  switch (currentLanguage) {
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
  const language = siteService.getSiteLanguage();
  const dateFormat = format || { day: "2-digit", month: "2-digit" };
  return new Date(date).toLocaleDateString(language, dateFormat);
}

export default { getResources, getDateFormatted };
