import { useContext } from "react";

import { AuthCredentialsService } from "./authCredentialsTypes";
import { AuthCredentialsContext } from "./Providers/AuthCredentialsProvider";

export function useAuthCredentials(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error(
      "AuthCredentials should be used within a AuthCredentialsProvider"
    );
  }

  return context;
}
