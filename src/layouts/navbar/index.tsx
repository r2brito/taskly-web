import React, { memo } from "react";
import { NavSection } from "../../components/nav-section";
import navConfig from "./config";
import { NavbarWrapper, NavbarContainer } from "./styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavSection navConfig={navConfig} />
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default memo(Navbar);
