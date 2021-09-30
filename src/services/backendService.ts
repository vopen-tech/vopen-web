import axios, { AxiosRequestConfig } from "axios";
import siteService from "./siteService";
import { IEdition, } from "../types/IEdition";
import { INotification } from "../types/INotification";

const apiBasePath = "https://api.vopen.tech/api";
// const notificationsApiBasePath = "http://localhost:7071/api";
// const notificationsApiBasePath = "https://vopennotifications.azurewebsites.net/api";

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

// async function pushNotification(notification: INotification): Promise<INotification | undefined> {
//   try {
//     const url = `${notificationsApiBasePath}/sponsors/${notification.sponsor}/notifications?code=N4NxCshxzaqHSaMEKvEWJ4pCrXTbcM5ovvuuJZM/wcWE1uNsZM/vXg==`;
//     const result = await axios.post(url, notification);
//     return result.data as INotification;
//   } catch (error) {
//     console.error(error);
//     return undefined;
//   }
// }

// async function getSponsorNotification(sponsor: string): Promise<INotification[] | undefined> {
//   try {
//     const url = `${notificationsApiBasePath}/sponsors/${sponsor}/notifications?code=N4NxCshxzaqHSaMEKvEWJ4pCrXTbcM5ovvuuJZM/wcWE1uNsZM/vXg==`;
//     const result = await axios.get(url);
//     return result.data as INotification[];
//   } catch (error) {
//     console.error(error);
//     return undefined;
//   }
// }

// async function getNotifications(): Promise<INotification[] | undefined> {
//   try {
//     const url = `${notificationsApiBasePath}/attendee/notifications?code=N4NxCshxzaqHSaMEKvEWJ4pCrXTbcM5ovvuuJZM/wcWE1uNsZM/vXg==`;
//     const result = await axios.get(url);
//     return result.data as INotification[];
//   } catch (error) {
//     console.error(error);
//     return undefined;
//   }
// }

export default {
  fetchConference,
  // pushNotification,
  // getSponsorNotification,
  // getNotifications
};
