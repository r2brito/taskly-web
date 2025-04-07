/* eslint-disable react/display-name */
import { Suspense, lazy } from "react";

import { Navigate, useRoutes, useLocation } from "react-router-dom";

import LoadingScreen from "../components/loading";
import AuthGuard from "../guards/authGuard";
import GuestGuard from "../guards/guestGuard";
import Layout from "../layouts";

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/main")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        }
      ]
    },

    {
      path: "",
      element: (
        <AuthGuard>
          <Layout />
        </AuthGuard>
      ),
      children: [
        {
          element: (
            <Navigate
              to="main/app"
              replace
            />
          ),
          index: true
        },
        { path: "main/app", element: <App /> },
        { path: "main/tasks", element: <TasksCreate /> },
        { path: "main/tasks/:id/edit", element: <TasksCreate /> },
        { path: "main/tasks/:id", element: <TaskDetails /> }
      ]
    },

    {
      path: "*",
      children: [
        { path: "404", element: <NotFound /> },
        {
          path: "*",
          element: (
            <Navigate
              to="/404"
              replace
            />
          )
        }
      ]
    },
    {
      path: "*",
      element: (
        <Navigate
          to="/404"
          replace
        />
      )
    }
  ]);
}

const Login = Loadable(lazy(() => import("../pages/auth/login")));
const Register = Loadable(lazy(() => import("../pages/auth/register")));

const App = Loadable(lazy(() => import("../pages/app")));
const TasksCreate = Loadable(lazy(() => import("../pages/tasks/taskCreate")));
const TaskDetails = Loadable(lazy(() => import("../pages/tasks/taskDetails")));

const NotFound = Loadable(lazy(() => import("../pages/404")));
