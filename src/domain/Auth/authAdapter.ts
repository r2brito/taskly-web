import { userAdapter } from "../User/userAdapter";

import { AuthCredentials, AuthCredentialsAPI } from "./authTypes";

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI
): AuthCredentials {
  return {
    token: authCredentialsAPI.token,
    user: userAdapter.toUser(authCredentialsAPI.user)
  };
}

export const authAdapter = { toAuthCredentials };
