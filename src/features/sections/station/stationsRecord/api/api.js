import { axiosInstance } from "src/app/axios";
import Endpoints from "src/constants/Endpoints";

export const getStationsRecordApi = async (params) => {
  try {
    const { data } = await axiosInstance.get(
      `${Endpoints.station}${Endpoints.stations}`,
      { params }
    );

    return { stations: data.stations, count: data.count };
  } catch {}
};
