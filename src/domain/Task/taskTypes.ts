export interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  completed: boolean;
  dueDate: string;
}

export interface TaskAPI {
  id: string;
  title: string;
  description: string;
  priority: string;
  completed: boolean;
  dueDate: string;
}

export interface TaskData {
  title: string;
  description: string;
  priority: string;
  completed: boolean;
  dueDate: string;
}

export type UpdateTaskParams = {
  id: string;
} & Partial<
  Pick<Task, "title" | "description" | "priority" | "completed" | "dueDate">
>;
