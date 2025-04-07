import React, { memo } from "react";
import { Wrapper, GroupWrapper, ListWrapper } from "./styles";
import { NavListRoot } from "./navList";

type NavSectionProps = {
  navConfig: {
    subheader: string;
    items: { title: string; [key: string]: any }[];
  }[];
};

function NavSection({ navConfig }: NavSectionProps) {
  return (
    <Wrapper>
      <GroupWrapper>
        {navConfig.map((group) => (
          <ListWrapper key={group.subheader}>
            {group.items.map((list) => (
              <NavListRoot
                key={list.title}
                list={list}
              />
            ))}
          </ListWrapper>
        ))}
      </GroupWrapper>
    </Wrapper>
  );
}

export default memo(NavSection);
