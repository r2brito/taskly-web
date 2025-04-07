import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 0.95rem;
`;

export const Select = styled.select`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: #e74c3c;
`;
