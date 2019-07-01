import axios from "axios";
import { IConference } from "../types/IConference";

const apiBasePath = "https://vopen-prod-api-win-app.azurewebsites.net/api";

async function fetchConference(conferenceId: string): Promise<IConference | undefined> {
  const url = `${apiBasePath}/v1/conferences/${conferenceId}`;

  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export default {
  fetchConference
};
