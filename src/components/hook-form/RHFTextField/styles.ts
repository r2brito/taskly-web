import styled from "styled-components";

export const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
  border-radius: 6px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? 'red' : '#0070f3')};
    box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 4px;
  margin-bottom: 0;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;