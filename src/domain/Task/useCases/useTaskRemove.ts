import { MutationOptions, QueryKeys } from "../../../infra";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { taskService } from "../taskService";

export function useTaskRemove(
  taskId: string,
  options?: MutationOptions<string>
) {
  const queryClient = useQueryClient();

  const mutation = useMutation<string, unknown, { taskId: string }>({
    mutationFn: ({ taskId }) => taskService.remove(taskId),
    onSuccess: (message) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.TaskRemove, taskId]
      });
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
    onError: () => {
      if (options?.onError) {
        options?.onError(options.errorMessage || "mensagem genérica");
      }
    }
  });

  return {
    mutate: mutation.mutate
  };
}
