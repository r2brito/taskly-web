import React from "react";
import AccountPopover from "./accountPopover";
import { HeaderWrapper, RightSection } from "./styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <RightSection>
        <AccountPopover />
      </RightSection>
    </HeaderWrapper>
  );
}
