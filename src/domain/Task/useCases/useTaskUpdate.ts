import { MutationOptions, QueryKeys } from "../../../infra";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { taskService } from "..";
import { UpdateTaskParams, Task } from "../taskTypes";

export function useTaskUpdate(options?: MutationOptions<Task>) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation<
    Task,
    unknown,
    UpdateTaskParams & { id: string }
  >({
    mutationFn: (data) => taskService.updateTask(data),
    retry: false,
    onError: (error) => {
      console.error(error);
      options?.onError?.(options?.errorMessage || "Erro ao atualizar task");
    },
    onSuccess: (task) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.TaskGetById, task.id]
      });
      options?.onSuccess?.(task);
    }
  });

  return {
    isPending,
    updateTask: (params: UpdateTaskParams & { id: string }) => mutate(params)
  };
}
