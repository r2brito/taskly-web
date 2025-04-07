import { forwardRef, ReactNode } from "react";
import { NavLink as RouterLink } from "react-router-dom";

import { isExternalLink } from "..";
import { ListItemStyle } from "./styles";

interface NavItemProps {
  item: {
    title: string;
    path?: string;
    icon?: ReactNode;
    children?: NavItemProps["item"][];
  };
  active?: boolean;
  open?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const NavItemRoot = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ item, active, open, onMouseEnter, onMouseLeave }, ref) => {
    const { title, path } = item;

    const content = <NavItemContent title={title} />;

    if (path && isExternalLink(path)) {
      return (
        <ListItemStyle
          as="a"
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          $activeRoot={active}
        >
          {content}
        </ListItemStyle>
      );
    }

    return (
      <ListItemStyle
        as={RouterLink}
        to={path!}
        $activeRoot={active}
      >
        {content}
      </ListItemStyle>
    );
  }
);

export const NavItemSub = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ item, active, open, onMouseEnter, onMouseLeave }, ref) => {
    const { title, path } = item;

    const content = <NavItemContent title={title} />;

    if (path && isExternalLink(path)) {
      return (
        <ListItemStyle
          as="a"
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          $subItem
          $activeSub={active}
        >
          {content}
        </ListItemStyle>
      );
    }

    return (
      <ListItemStyle
        as={RouterLink}
        to={path!}
        $subItem
        $activeSub={active}
      >
        {content}
      </ListItemStyle>
    );
  }
);

function NavItemContent({ title }: { title: string }) {
  return <span>{title}</span>;
}
