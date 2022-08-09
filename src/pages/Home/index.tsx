import { FormEvent, useEffect, useReducer, useState } from 'react';
import { produce } from 'immer';

import { Header } from '../../components/Header';

import { PlusCircle, ClipboardText, Trash } from 'phosphor-react';
import {
  Container,
  NewTaskContainer,
  TaskInfoContainer,
  TaskItem,
  TasksContainer,
  TasksCreated,
  TasksDone,
  TasksEmptyContainer,
  TodoContainer,
  Wrapper,
} from './styles';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}
interface TasksState {
  tasks: Task[];
  amountTasks: number;
  amountTasksDone: number;
}

export function Home() {
  const [tasksState, dispatch] = useReducer(
    (state: TasksState, action: any) => {
      if (action.type === 'ADD_NEW_TASK') {
        return produce(state, (draft) => {
          draft.tasks.push(action.payload.newTask);
          draft.amountTasks = draft.amountTasks + 1;
          return draft;
        });
      }

      if (action.type === 'MARK_TASK_DONE') {
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

      if (action.type === 'DELETE_TASK') {
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

      return state;
    },
    {
      tasks: [],
      amountTasks: 0,
      amountTasksDone: 0,
    },
    () => {
      const tasksStateStorage = localStorage.getItem('@todobylucas:v0.0.1');

      if (tasksStateStorage) {
        return JSON.parse(tasksStateStorage);
      }

      return { tasks: [], amountTasks: 0, amountTasksDone: 0 };
    }
  );

  const [title, setTitle] = useState('');

  const { tasks, amountTasks, amountTasksDone } = tasksState;

  const isTaskEmpty = tasks.length === 0;

  useEffect(() => {
    localStorage.setItem('@todobylucas:v0.0.1', JSON.stringify(tasksState));
  }, [tasksState]);

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask: Task = {
      id: String(new Date().getTime()),
      title,
      isDone: false,
    };

    dispatch({
      type: 'ADD_NEW_TASK',
      payload: { newTask },
    });

    setTitle('');
  }

  function handleMarkTaskDone(id: string) {
    dispatch({
      type: 'MARK_TASK_DONE',
      payload: { id },
    });
  }

  function handleDeleteTask(id: string) {
    dispatch({
      type: 'DELETE_TASK',
      payload: { id },
    });
  }

  return (
    <Container>
      <Header />
      <TodoContainer>
        <NewTaskContainer>
          <input
            type='text'
            placeholder='Adicione uma nova tarefa'
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <button type='submit' onClick={handleAddNewTask}>
            Criar <PlusCircle size={24} />
          </button>
        </NewTaskContainer>
        <TasksContainer>
          <TaskInfoContainer>
            <TasksCreated>
              <p>Tarefas criadas</p>
              <span>{amountTasks}</span>
            </TasksCreated>

            <TasksDone>
              <p>Concluídas</p>
              <span>
                {amountTasksDone} de {amountTasks}
              </span>
            </TasksDone>
          </TaskInfoContainer>

          {isTaskEmpty && (
            <TasksEmptyContainer>
              <ClipboardText size={64} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </TasksEmptyContainer>
          )}

          {tasks.map((task) => (
            <TaskItem key={task.id} isDone={task.isDone}>
              <Wrapper>
                <input
                  type='checkbox'
                  defaultChecked={task.isDone}
                  onClick={() => handleMarkTaskDone(task.id)}
                />
              </Wrapper>

              <p>{task.title}</p>

              <button onClick={() => handleDeleteTask(task.id)}>
                <Trash size={24} />
              </button>
            </TaskItem>
          ))}
        </TasksContainer>
      </TodoContainer>
    </Container>
  );
}
