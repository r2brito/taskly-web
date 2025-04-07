import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;
