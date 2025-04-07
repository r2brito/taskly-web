import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 1rem;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 15px ${({ theme }) => theme.colors.shadow};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.p8};
  width: 100%;
`;
