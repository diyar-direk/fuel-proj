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

  const handleErrNetwork = useCallback((err) => {
    if (err.message) {
      const message = err.message;

      toast.error(message);
    }
  }, []);

  useLayoutEffect(() => {
    const id = axiosInstance.interceptors.response.use(
      (res) => {
        handleResponse(res);
        return res;
      },
      (err) => {
        if (err.response) {
          handleResponse(err.response);
        }

        if (err.code === "ERR_NETWORK") {
          handleErrNetwork(err);
        }

        return Promise.reject(err);
      }
    );

    return () => axiosInstance.interceptors.response.eject(id);
  }, [handleResponse, handleErrNetwork]);
}
