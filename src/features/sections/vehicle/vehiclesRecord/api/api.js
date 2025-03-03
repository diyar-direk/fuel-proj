import { axiosInstance } from "src/app/axios";
import Endpoints from "src/constants/Endpoints";

export const getVehiclesRecordApi = async (params) => {
  try {
    const { data } = await axiosInstance.get(
      `${Endpoints.transport}${Endpoints.vehicles}`,
      { params }
    );

    return { vehicles: data.vehicles, count: data.count };
  } catch {}
};
