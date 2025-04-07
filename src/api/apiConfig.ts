import { AuthCredentials } from "../domain";
import axios from "axios";

export const BASE_URL = "http://localhost:3001/";
export const api = axios.create({
  baseURL: BASE_URL
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

export function registerInterceptor({ removeCredentials }: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    (response) => response,
    async (responseError) => {
      const failedRequest = responseError.config;

      if (responseError.response.status === 401) {
        if (failedRequest.sent) {
          removeCredentials();
          return Promise.reject(responseError);
        }
      }

      return Promise.reject(responseError);
    }
  );

  return () => api.interceptors.response.eject(interceptor);
}
