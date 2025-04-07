import { api, PageAPI, PageParams } from "../../api";

import { TaskAPI, TaskData } from "./taskTypes";

async function getList(
  params?: PageParams & { user_id?: string }
): Promise<PageAPI<TaskAPI>> {
  const response = await api.get<PageAPI<TaskAPI>>("tasks", {
    params
  });

  return response.data;
}

async function createTask(data: TaskData): Promise<TaskAPI> {
  const response = await api.post<TaskAPI>("tasks", data);
  return response.data;
}

async function updateTask(
  data: Partial<TaskAPI> & { id: string }
): Promise<TaskAPI> {
  const response = await api.patch<TaskAPI>(`/tasks/${data.id}`, data);
  return response.data;
}

async function getById(taskId: string): Promise<TaskAPI> {
  const response = await api.get<TaskAPI>(`tasks/${taskId}`);
  return response.data;
}

async function remove(taskId: string): Promise<{ message: string }> {
  const response = await api.delete<{ message: string }>(`tasks/${taskId}`);

  return response.data;
}

export const taskApi = {
  getList,
  createTask,
  updateTask,
  remove,
  getById
};
