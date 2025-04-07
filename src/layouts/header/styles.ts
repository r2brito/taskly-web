import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeaderWrapper = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const AvatarButton = styled.button`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

export const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.primary || "#2563eb"};
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
`;

export const PopoverContainer = styled.div`
  position: absolute;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const PopoverCard = styled.div`
  min-width: 220px;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #e5e7eb;
`;

export const PopoverHeader = styled.div`
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text || "#111827"};
  background-color: #f9fafb;
`;

export const Divider = styled.div`
  border-top: 1px solid #e5e7eb;
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  font-weight: 500;
  font-size: 0.95rem;
  color: #dc2626;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #fef2f2;
  }
`;
