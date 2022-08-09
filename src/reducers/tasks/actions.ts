import { Task } from './reducer';

export enum TaskTypes {
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  MARK_TASK_DONE = 'MARK_TASK_DONE',
  DELETE_TASK = 'DELETE_TASK',
}

export function addNewTask(newTask: Task) {
  return {
    type: 'ADD_NEW_TASK',
    payload: { newTask },
  };
}

export function markTaskDone(id: string) {
  return {
    type: 'MARK_TASK_DONE',
    payload: { id },
  };
}

export function deleteTask(id: string) {
  return {
    type: 'DELETE_TASK',
    payload: { id },
  };
}
