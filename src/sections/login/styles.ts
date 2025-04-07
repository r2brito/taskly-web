import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ $error, theme }) => ($error ? "red" : "#ccc")};
  font-size: 1rem;
  outline: none;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
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

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
