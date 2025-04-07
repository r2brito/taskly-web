import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { taskService } from "../../../domain";
import { QueryKeys } from "../../../infra";
import {
  Actions,
  DeleteButton,
  Description,
  Details,
  EditButton,
  Header,
  Message,
  PriorityTag,
  Title,
  Wrapper
} from "./styles";
import { useTaskRemove } from "../../../domain/Task/useCases/useTaskRemove";
import { useSnackbar } from "notistack";
import DeleteModal from "../../../components/modal/modal";
import { useState } from "react";
import { PATH_APP } from "../../../routes/paths";

export default function TaskDetailsPage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams<{ id: string }>();

  // @ts-ignore
  const { mutate } = useTaskRemove(id, {
    onSuccess: () => {
      enqueueSnackbar("Tarefa deletada com Sucesso!", {
        variant: "success",
        autoHideDuration: 2000
      });
    },
    onError: () => {
      enqueueSnackbar("Erro ao criar Tarefa!", {
        variant: "error",
        autoHideDuration: 2000
      });
    }
  });

  const {
    data: task,
    isLoading,
    error
  } = useQuery({
    queryKey: [QueryKeys.TaskGetById, id],
    queryFn: () => taskService.getById(id!),
    enabled: !!id
  });

  if (isLoading) return <Message>Carregando tarefa...</Message>;
  if (error) return <Message>Erro ao carregar a tarefa.</Message>;
  if (!task) return <Message>Tarefa não encontrada.</Message>;

  const handleDelete = () => {
    // @ts-ignore
    mutate({ taskId: id });
    setShowModal(false);
    navigate(`${PATH_APP.general.app}`);
  };

  const handleEdit = () => {
    navigate(`/main/tasks/${id}/edit`);
  };

  return (
    <Wrapper>
      <Header>
        <Title>{task.title}</Title>
        <PriorityTag priority={task.priority}>{task.priority}</PriorityTag>
      </Header>

      <Description>{task.description}</Description>

      <Details>
        <p>
          <strong>Data de entrega:</strong>{" "}
          {new Date(task.dueDate).toLocaleDateString("pt-BR")}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {task.completed ? "Concluída ✅" : "Pendente ⏳"}
        </p>
      </Details>

      <Actions>
        <EditButton onClick={handleEdit}>Editar</EditButton>
        <DeleteButton
          onClick={() => setShowModal(true)}
          disabled={false}
        >
          Deletar
        </DeleteButton>
      </Actions>

      <DeleteModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </Wrapper>
  );
}
