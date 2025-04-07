import { useEffect } from "react";

import {
  Wrapper,
  Content,
  Title,
  Card,
  CardHeader,
  CardTitle,
  PriorityTag,
  CardFooter,
  DueDate,
  StatusText
} from "./styles";
import { taskService, Task } from "../../domain";
import { QueryKeys } from "../../infra";
import { StaticList } from "../../components/list/list";
import { useNavigate } from "react-router-dom";

const formatDate = (date: string | Date) =>
  new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

export default function AppPage() {
  const navigate = useNavigate();

  function renderItem(item: Task) {
    return (
      <Card
        priority={item.priority}
        completed={item.completed}
        key={item.id}
        onClick={() => {
          navigate(`/main/tasks/${item.id}`);
        }}
      >
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
          <PriorityTag priority={item.priority}>{item.priority}</PriorityTag>
        </CardHeader>

        <CardFooter>
          {item.completed ? (
            <StatusText>Concluída ✅</StatusText>
          ) : (
            <DueDate>Entrega: {formatDate(item.dueDate)}</DueDate>
          )}
        </CardFooter>
      </Card>
    );
  }

  return (
    <Wrapper>
      <Content>
        <Title>Minhas Tarefas</Title>

        <StaticList
          queryKey={[QueryKeys.TaskList]}
          getList={taskService.getList}
          renderItem={renderItem}
          emptyListProps={{
            emptyMessage: "Nenhuma tarefa encontrado.",
            errorMessage: "Erro ao carregar as tarefas."
          }}
        />
      </Content>
    </Wrapper>
  );
}
