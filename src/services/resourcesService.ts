import siteService from "./siteService";
import enUs from "../resources/en-US.json";
import esAr from "../resources/es-AR.json";

function getResources() {
  const currentLanguage = siteService.getSiteLanguage();

  switch (currentLanguage) {
    case "en-US":
      return enUs;
    case "es-AR":
    default:
      return esAr;
  }
}

export default { getResources };
