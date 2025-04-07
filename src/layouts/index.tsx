import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header";
import Navbar from "./navbar";
import { Main } from "./styles";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
