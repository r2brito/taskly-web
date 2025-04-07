import { Task, TaskAPI } from "./taskTypes";

function toTask(taskAPI: TaskAPI): Task {
  return {
    id: taskAPI.id,
    title: taskAPI.title,
    description: taskAPI.description,
    priority: taskAPI.priority,
    completed: taskAPI.completed,
    dueDate: taskAPI.dueDate
  };
}

export const taskAdapter = { toTask };
