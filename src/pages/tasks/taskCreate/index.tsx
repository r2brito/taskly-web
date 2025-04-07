import Page from "../../../components/page";
import { useTaskList } from "../../../domain";

import { useLocation, useParams } from "react-router-dom";
import TaskForm from "../../../sections/task/taskForm";
import { Title, Wrapper } from "./styles";

export default function TasksPage() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { list } = useTaskList();
  const isEdit = pathname.includes("edit");
  const currentTask = list.find((task) => task.id === id);

  const currentTaskParsed = currentTask
    ? {
        ...currentTask,
        dueDate: currentTask.dueDate ? new Date(currentTask.dueDate) : null
      }
    : undefined;

  return (
    <Page title={isEdit ? "Editar Tarefa" : "Nova Tarefa"}>
      <Title>Editar Tarefa</Title>

      <Wrapper>
        <TaskForm
          isEdit={isEdit}
          currentTask={currentTaskParsed}
        />
      </Wrapper>
    </Page>
  );
}
