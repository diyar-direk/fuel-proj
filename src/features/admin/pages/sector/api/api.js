import toast from "react-hot-toast";
import { axiosInstance } from "src/app/axios";

export const createSectorApi = "general/sectors/create";

export const fetchCouncils = async ({ pageParam = 1, search }) => {
  try {
    const response = await axiosInstance.get(`general/councils`, {
      params: {
        page: pageParam,
        name: search,
      },
    });

    return {
      count: response.data.count,
      data: response.data.councils,
      pageParam: pageParam,
    };
  } catch (error) {
    toast.error(
      "Error fetching products..",
      error.response.data.Error || error.response.data.error
    );
  }
};
