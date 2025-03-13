import toast from "react-hot-toast";
import { axiosInstance } from "src/app/axios";

export const createCouncilApi = "general/councils/create";

export const fetchCommittees = async ({ pageParam = 1, search }) => {
  try {
    const response = await axiosInstance.get(`general/committees`, {
      params: {
        page: pageParam,
        name: search,
      },
    });

    return {
      count: response.data.count,
      data: response.data.committees,
      pageParam: pageParam,
    };
  } catch (error) {
    toast.error(
      "Error fetching products..",
      error.response.data.Error || error.response.data.error
    );
  }
};
