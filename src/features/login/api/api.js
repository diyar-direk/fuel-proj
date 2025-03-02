import { axiosInstance } from "src/app/axios";
import { login } from "src/app/slice";
import Endpoints from "src/constants/Endpoints";

export const loginApiAsync =
  ({ username, password }, success = () => {}, fail = () => {}) =>
  async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(
        `${Endpoints.account}${Endpoints.login}`,
        { username, password }
      );

      success();

      dispatch(login(data));

      return data;
    } catch {
      fail();
    }
  };
