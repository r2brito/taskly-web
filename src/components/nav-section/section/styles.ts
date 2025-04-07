import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-shrink: 0;
`;

interface ListItemProps {
  $activeRoot?: boolean;
  $activeSub?: boolean;
  $subItem?: boolean;
  $open?: boolean;
}

export const ListItemStyle = styled.button<ListItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 0 0.5rem;
  padding: 0 1rem;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $activeRoot, theme }) =>
    $activeRoot &&
    css`
      background-color: ${theme.colors.primary};
      color: #fff;
    `}

  ${({ $subItem }) =>
    $subItem &&
    css`
      justify-content: space-between;
      padding-left: 0.75rem;
    `}

  ${({ $activeSub, theme }) =>
    $activeSub &&
    css`
      font-weight: 600;
      color: ${theme.colors.primary};
    `}

  ${({ $open }) =>
    $open &&
    css`
      background-color: ${({ theme }) => theme.colors.hover};
    `}
`;
