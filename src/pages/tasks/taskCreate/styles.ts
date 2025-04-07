import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
