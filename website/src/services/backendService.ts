import { ISchedule } from "../types/ISchedule";

const apiBasePath = "/";

async function fetchSchedule(): Promise<ISchedule> {
  return Promise.resolve({ days: [] });
}

export default {
  fetchSchedule
};
