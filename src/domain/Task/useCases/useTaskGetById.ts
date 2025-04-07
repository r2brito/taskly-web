import { QueryKeys } from "../../../infra";
import { useQuery } from "@tanstack/react-query";

import { taskService } from "../taskService";

export function useTaskGetById(id: string, enabled: boolean) {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: [QueryKeys.TaskGetById, id],
    queryFn: () => taskService.getById(id),
    staleTime: 1000 * 30, // 30 seconds
    enabled
  });

  return {
    task: data,
    isLoading,
    isFetching,
    isError,
    refetch
  };
}
