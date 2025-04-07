import styled from "styled-components";

export const Wrapper = styled.div`
  /* min-height: calc(100vh - 120px); */
  /* background-color: ${({ theme }) => theme.colors.background}; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 1.25rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.9rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border: none;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
