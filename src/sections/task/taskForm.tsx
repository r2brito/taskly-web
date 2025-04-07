import React, { useEffect, useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { FieldErrors, useForm } from "react-hook-form";

import FormProvider from "../../components/hook-form/FormProvider";
import TaskSchema from "../../validations/tasks.scheme";
import { Wrapper, SubmitButton, FormContainer, FormContent } from "./styles";
import { useTaskCreate, useTaskUpdate } from "../../domain";
import RHFTextField from "../../components/hook-form/RHFTextField/RHFTextField";
import RHFSelect from "../../components/hook-form/RHFSelect/RHFSelect";
import { RHFCheckbox } from "../../components/hook-form/RHFCheckbox/RHFCheckbox";
import RHFDatePicker from "../../components/hook-form/RHFDatePicker/RHFDatePicker";
import { useNavigate } from "react-router-dom";
import { PATH_APP } from "../../routes/paths";
import { useSnackbar } from "notistack";

interface TaskFormProps {
  isEdit?: boolean;
  currentTask: TaskFormInputs | undefined;
}

type TaskFormInputs = InferType<typeof TaskSchema>;

export default function TaskForm({ isEdit, currentTask }: TaskFormProps) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { createTask } = useTaskCreate({
    onSuccess: () => {
      enqueueSnackbar("Tarefa criada com Sucesso!", {
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
  const { updateTask } = useTaskUpdate({
    onSuccess: () => {
      enqueueSnackbar("Tarefa editada com Sucesso!", {
        variant: "success",
        autoHideDuration: 2000
      });
    },
    onError: () => {
      enqueueSnackbar("Erro ao editar Tarefa!", {
        variant: "error",
        autoHideDuration: 2000
      });
    }
  });

  const defaultValues: TaskFormInputs = useMemo(
    () => ({
      title: currentTask?.title || "",
      description: currentTask?.description || "",
      dueDate: currentTask?.dueDate ? new Date(currentTask.dueDate) : null,
      priority: currentTask?.priority || "",
      completed: currentTask?.completed || false
    }),
    [currentTask]
  );

  const methods = useForm<TaskFormInputs>({
    mode: "onBlur",
    //@ts-ignore
    resolver: yupResolver(TaskSchema),
    defaultValues
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  useEffect(() => {
    if (isEdit && currentTask) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentTask]);

  const onSubmit = async (data: any) => {
    !isEdit
      ? await createTask(data)
      : // @ts-ignore
        updateTask({ id: currentTask.id, ...data });

    navigate(PATH_APP.general.app);
  };

  const onError = (errors: FieldErrors<TaskFormInputs>) => {
    const firstErrorField = Object.keys(errors)[0];
    const element = document.querySelector(`[name="${firstErrorField}"]`);
    if (element && "focus" in element) {
      (element as HTMLElement).focus();
    }
  };

  return (
    <FormContainer>
      <Wrapper>
        <FormProvider
          //@ts-ignore
          methods={methods}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <FormContent>
            <RHFTextField
              name="title"
              placeholder="Título da tarefa"
            />

            <RHFTextField
              name="description"
              placeholder="Descrição da tarefa"
            />

            <RHFDatePicker
              name="dueDate"
              placeholder="Data de entrega"
            />

            <RHFSelect
              name="priority"
              placeholder="Prioridade"
            >
              <option value="alta">Alta</option>
              <option value="media">Média</option>
              <option value="baixa">Baixa</option>
            </RHFSelect>

            <RHFCheckbox
              name="completed"
              label="Tarefa concluída?"
            />

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Salvando..."
                : isEdit
                ? "Atualizar"
                : "Adicionar"}
            </SubmitButton>
          </FormContent>
        </FormProvider>
      </Wrapper>
    </FormContainer>
  );
}
