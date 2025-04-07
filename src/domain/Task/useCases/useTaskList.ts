import { Task, taskService } from "../../../domain";
import { QueryKeys, usePaginatedList } from "../../../infra";

export function useTaskList() {
  return usePaginatedList<Task>([QueryKeys.TaskList], taskService.getList);
}
