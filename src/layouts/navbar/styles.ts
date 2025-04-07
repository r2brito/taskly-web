import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 88px;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background || "#fff"};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: 0.75rem 0;

  @media (max-width: 768px) {
    top: 64px;
    padding: 0.5rem 0;
  }
`;

export const NavbarContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;
