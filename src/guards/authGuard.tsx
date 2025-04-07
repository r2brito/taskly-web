/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReactNode, useState } from "react";

import { Navigate, useLocation } from "react-router-dom";

import LoadingScreen from "../components/loading";
import Login from "../pages/auth/login";
import { useAuthCredentials } from "../services";

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { authCredentials, isLoading } = useAuthCredentials();

  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!authCredentials) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
