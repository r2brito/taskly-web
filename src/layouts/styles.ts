import styled from "styled-components";

export const Main = styled.main`
  padding-top: 200px;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 1024px) {
    padding-top: 5rem; /* lg:pt-20 */
  }
`;
