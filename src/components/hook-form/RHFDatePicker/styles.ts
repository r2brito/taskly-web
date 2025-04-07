import styled from "styled-components";

export const StyledDatePickerInput = styled.input.attrs({ type: "text" })`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
