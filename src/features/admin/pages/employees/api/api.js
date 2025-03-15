import toast from "react-hot-toast";
import { axiosInstance } from "src/app/axios";
import Endpoints from "src/constants/Endpoints";

export const createEmployeApi = `${Endpoints.account}employees/create`;

export const getSpecializations = async ({ pageParam = 1, search }) => {
  try {
    const response = await axiosInstance.get(
      `${Endpoints.account}specializations`,
      {
        params: {
          page: pageParam,
          name: search,
        },
      }
    );

    return {
      count: response.data.count,
      data: response.data.specializations,
      pageParam: pageParam,
    };
  } catch (error) {
    toast.error(
      "Error fetching products..",
      error.response.data.Error || error.response.data.error
    );
  }
};

export const getEmployess = async (params) => {
  try {
    const { data } = await axiosInstance.get(`${Endpoints.account}employees`, {
      params,
    });
    const employees = data.employees.map((employee) => ({
      ...employee,

      specialization: employee.specialization.name,
      full_name: `${employee.user.first_name} ${
        employee.user.middle_name || ""
      } ${employee.user.last_name}`.trim(),
    }));

    return { employees, count: data.count };
  } catch {}
};
