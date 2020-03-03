import axios, { AxiosRequestConfig } from "axios";
import siteService from "./siteService";
import { IEdition } from "../types/IEdition";

const apiBasePath = "https://api.vopen.tech/api";

async function fetchConference(conferenceId: string): Promise<IEdition | undefined> {
  const url = `${apiBasePath}/v1/editions/${conferenceId}`;
  const activeSiteLanguage = siteService.getSiteLanguageAndRegion();

  // For now, the backend only stores data either in es-AR or en-US
  // if we have to regionalize the data, we'll have to update the API's code
  const siteLanguage = activeSiteLanguage.startsWith("es-") ? "es-AR" : "en-US";

  const config: AxiosRequestConfig = {
    headers: {
      // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
      "Accept-Language": siteLanguage || "*"
    }
  };

  try {
    const result = await axios.get(url, config);
    return result.data as IEdition;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export default {
  fetchConference
};
