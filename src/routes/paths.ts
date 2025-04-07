function path(root: string, sublink: string): string {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_APP = "/main";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register")
};

export const PATH_APP = {
  root: ROOTS_APP,
  general: {
    app: path(ROOTS_APP, "/app"),
    tasks: path(ROOTS_APP, "/tasks"),
    listById: path(ROOTS_APP, "/tasks/id"),
    editById: path(ROOTS_APP, "/tasks/id/edit")
  }
};
