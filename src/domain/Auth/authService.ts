import { api } from "../../api";

import { authAdapter } from "./authAdapter";
import { authApi } from "./authApi";
import { AuthCredentials, SignUpData } from "./authTypes";

async function signIn(
  email: string,
  password: string
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    const authCredentials = authAdapter.toAuthCredentials(authCredentialsAPI);
    return authCredentials;
  } catch (error: any) {
    throw new Error("email ou senha inválido");
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData);
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

export const authService = {
  signIn,
  signOut,
  updateToken,
  removeToken,
  signUp
};
