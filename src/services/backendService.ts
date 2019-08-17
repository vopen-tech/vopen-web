import axios, { AxiosRequestConfig } from "axios";
import siteService from "./siteService";
import { IEdition } from "../types/IEdition";

const apiBasePath = "https://api.vopen.tech/api";

async function fetchConference(conferenceId: string): Promise<IEdition | undefined> {
  const url = `${apiBasePath}/v1/editions/${conferenceId}`;
  const activeSiteLanguage = siteService.getSiteLanguage();
  const config: AxiosRequestConfig = {
    headers: {
      // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
      "Accept-Language": activeSiteLanguage || "*"
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
