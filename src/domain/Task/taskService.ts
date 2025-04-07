import { apiAdapter } from "../../api";
import { Page } from "../../types";

import { taskAdapter } from "./taskAdapter";
import { taskApi } from "./taskApi";
import { Task, TaskData, UpdateTaskParams } from "./taskTypes";

async function getList(page: number, userId?: string): Promise<Page<Task>> {
  const postPageAPI = await taskApi.getList({
    page,
    per_page: 10,
    user_id: userId
  });

  return apiAdapter.toPageModel(postPageAPI, taskAdapter.toTask);
}

async function createTask(taskParams: TaskData): Promise<Task> {
  const taskApiData = await taskApi.createTask(taskParams);
  return taskAdapter.toTask(taskApiData);
}

async function updateTask(
  updatedParams: UpdateTaskParams & { id: string }
): Promise<Task> {
  const current = await getById(updatedParams.id); // busca a versão atual da tarefa
  const updatedTask = getUpdatedTask(current, updatedParams);

  const taskAPI = await taskApi.updateTask({ ...updatedTask, id: current.id });
  return taskAdapter.toTask(taskAPI);
}

function getUpdatedTask(
  current: Task,
  updatedParams: UpdateTaskParams
): Partial<Task> & { id: string } {
  const task: Partial<Task> & { id: string } = {
    id: current.id
  };

  if (updatedParams.title && current.title !== updatedParams.title) {
    task.title = updatedParams.title;
  }
  if (
    updatedParams.description &&
    current.description !== updatedParams.description
  ) {
    task.description = updatedParams.description;
  }
  if (updatedParams.priority && current.priority !== updatedParams.priority) {
    task.priority = updatedParams.priority;
  }
  if (updatedParams.dueDate && current.dueDate !== updatedParams.dueDate) {
    task.dueDate = updatedParams.dueDate;
  }
  if (
    updatedParams.completed !== undefined &&
    current.completed !== updatedParams.completed
  ) {
    task.completed = updatedParams.completed;
  }

  return task;
}

async function getById(taskId: string): Promise<Task> {
  const taskApiData = await taskApi.getById(taskId);
  return taskAdapter.toTask(taskApiData);
}

async function remove(taskId: string): Promise<string> {
  const response = await taskApi.remove(taskId);
  return response.message;
}

export const taskService = {
  getList,
  createTask,
  updateTask,
  remove,
  getById
};
