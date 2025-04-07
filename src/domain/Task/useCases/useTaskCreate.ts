import { MutationOptions, QueryKeys } from "../../../infra";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { taskService } from "../taskService";
import { Task, TaskData } from "../taskTypes";

export function useTaskCreate(options?: MutationOptions<Task>) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation<Task, unknown, TaskData>({
    mutationFn: (data) => taskService.createTask(data),
    onSuccess: (post) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.TaskList] });
      if (options?.onSuccess) {
        options.onSuccess(post);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || "erro ao criar task");
      }
    }
  });

  async function createTask(data: TaskData) {
    mutate(data);
  }

  return {
    isPending,
    isError,
    createTask
  };
}
