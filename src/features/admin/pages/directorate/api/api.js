import { axiosInstance } from "src/app/axios";
import Endpoints from "src/constants/Endpoints";

export const createDirectorateApi = "general/directorates/create";

export const getDirectorates = async (params) => {
  try {
    const { data } = await axiosInstance.get(
      `${Endpoints.general}directorates`,
      { params }
    );

    return { vehicles: data.directorates, count: data.count };
  } catch {}
};
