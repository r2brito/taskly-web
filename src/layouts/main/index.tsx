import React from "react";
import { Outlet } from "react-router-dom";

import NavbarHorizontal from "../navbar";
import { MainWrapper } from "./styles";

const MainLayout: React.FC = () => {
  return (
    <MainWrapper>
      <NavbarHorizontal />
      <Outlet />
    </MainWrapper>
  );
};

export default MainLayout;
