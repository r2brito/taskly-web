import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
`;

export const MessageText = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

export const OutlineButton = styled.button`
  padding: 0.5rem 1.25rem;
  background-color: transparent;
  border: 2px solid #007bff;
  color: #007bff;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 1rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
