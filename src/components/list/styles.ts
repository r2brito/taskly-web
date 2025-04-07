import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #777;
  margin-top: 2rem;
`;
