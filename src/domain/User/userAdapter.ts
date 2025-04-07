import { User, UserAPI } from "./userTypes";

function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    name: userAPI.name,
    email: userAPI.email
  };
}

export const userAdapter = {
  toUser
};
