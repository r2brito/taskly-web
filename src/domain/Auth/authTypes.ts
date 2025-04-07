import { User, UserAPI } from "../User";

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  token: string;
  user: UserAPI;
}

export interface SignInData {
  name?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  name: string;
  email: string;
  password: string;
}
export interface SignUpData {
  name: string;
  email: string;
  password: string;
}
