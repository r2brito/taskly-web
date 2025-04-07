import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.danger};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
