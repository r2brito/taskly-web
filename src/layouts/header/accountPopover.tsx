import React, { useEffect, useRef } from "react";

import {
  AvatarButton,
  AvatarImg,
  PopoverContainer,
  PopoverCard,
  PopoverHeader,
  Divider,
  LogoutButton
} from "./styles";
import { useAuthCredentials } from "../../services";

const POPOVER_WIDTH = 250;

export default function AccountPopover() {
  const { authCredentials, removeCredentials } = useAuthCredentials();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    try {
      removeCredentials();
    } catch (error) {
      console.error(error);
    }
  };

  const open = Boolean(anchorEl);
  const rect = anchorEl?.getBoundingClientRect();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        setAnchorEl(null);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, anchorEl]);

  return (
    <>
      <AvatarButton onClick={handleClick}>
        <AvatarImg
          src={`https://i.pravatar.cc/150?img=${(1 % 70) + 1}`}
          alt={authCredentials?.user.name}
        />
      </AvatarButton>

      {open && rect && (
        <PopoverContainer
          ref={popoverRef}
          style={{
            top: rect.bottom + window.scrollY + 8,
            left: Math.min(
              window.innerWidth - POPOVER_WIDTH - 8,
              rect.left + rect.width / 2 - POPOVER_WIDTH / 2 + window.scrollX
            )
          }}
        >
          <PopoverCard>
            <PopoverHeader>{authCredentials?.user.name}</PopoverHeader>
            <Divider />
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </PopoverCard>
        </PopoverContainer>
      )}
    </>
  );
}
