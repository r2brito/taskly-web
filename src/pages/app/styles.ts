import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5rem 1rem;
  min-height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 768px;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const Card = styled.div<{ priority: string; completed?: boolean }>`
  padding: 1rem;
  background-color: ${({ priority, completed, theme }) =>
    completed
      ? "#b0b0b0"
      : priority === "alta"
      ? theme.colors.danger
      : priority === "media"
      ? theme.colors.warning
      : theme.colors.success};
  border-radius: 0.75rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`;

export const PriorityTag = styled.span<{ priority: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 0.8rem;
  opacity: 0.85;
`;

export const StatusText = styled.span`
  color: #f0f0f0;
  font-weight: 600;
  font-size: 0.9rem;
`;

export const DueDate = styled.span`
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
`;
