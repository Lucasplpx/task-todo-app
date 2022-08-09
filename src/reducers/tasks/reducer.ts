import produce from 'immer';
import { TaskTypes } from './actions';

export interface Task {
  id: string;
  title: string;
  isDone: boolean;
}
interface TasksState {
  tasks: Task[];
  amountTasks: number;
  amountTasksDone: number;
}

export function tasksReducer(state: TasksState, action: any) {
  switch (action.type) {
    case TaskTypes.ADD_NEW_TASK: {
      return produce(state, (draft) => {
        draft.tasks.push(action.payload.newTask);
        draft.amountTasks = draft.amountTasks + 1;
        return draft;
      });
    }

    case TaskTypes.MARK_TASK_DONE: {
      return produce(state, (draft) => {
        const index = draft.tasks.findIndex(
          (task) => task.id === action.payload.id
        );

        if (draft.tasks[index].isDone) {
          draft.tasks[index].isDone = false;
          draft.amountTasksDone = draft.amountTasksDone - 1;
        } else {
          draft.tasks[index].isDone = true;
          draft.amountTasksDone = draft.amountTasksDone + 1;
        }
        return draft;
      });
    }

    case TaskTypes.DELETE_TASK: {
      return produce(state, (draft) => {
        const index = draft.tasks.findIndex(
          (task) => task.id === action.payload.id
        );

        if (draft.tasks[index].isDone) {
          draft.amountTasksDone = draft.amountTasksDone - 1;
        }

        draft.amountTasks = draft.amountTasks - 1;
        draft.tasks.splice(index, 1);

        return draft;
      });
    }

    default: {
      return state;
    }
  }
}
