import { useCallback, useLayoutEffect } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "src/app/axios";

export default function useAxiosInterceptor() {
  const handleResponse = useCallback((res) => {
    if (res.status > 399) {
      const messages = res.data.messages;

      const message = messages?.[0].message || res.data.non_field_errors;
      toast.error(message);
    }
  }, []);

  useLayoutEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        handleResponse(res);
        return res;
      },
      (err) => {
        handleResponse(err.response);

        return Promise.reject(err);
      }
    );
  }, [handleResponse]);
}
