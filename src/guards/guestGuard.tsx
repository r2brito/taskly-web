import { ReactNode } from "react";

import { Navigate } from "react-router-dom";

import { PATH_APP } from "../routes/paths";
import { useAuthCredentials } from "../services";

interface GuestGuardProps {
  children: ReactNode;
}

export default function GuestGuard({ children }: GuestGuardProps) {
  const { authCredentials } = useAuthCredentials();

  if (authCredentials) {
    return <Navigate to={PATH_APP.general.app} />;
  }

  return <>{children}</>;
}
