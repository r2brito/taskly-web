import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriorityTag = styled.span<{ priority: string }>`
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background-color: ${({ priority, theme }) =>
    priority === "alta"
      ? theme.colors.danger
      : priority === "media"
      ? theme.colors.warning
      : theme.colors.success};
  color: white;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin: 1.5rem 0;
`;

export const Details = styled.div`
  font-size: 0.95rem;
  color: #555;

  p {
    margin: 0.5rem 0;
  }
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 3rem;
  color: #666;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
