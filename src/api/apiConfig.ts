import { AuthCredentials } from "../domain";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

console.log("API URL:", process.env.REACT_APP_API_URL);

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
