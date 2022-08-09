import { FormEvent, useEffect, useReducer, useState } from 'react';
import { PlusCircle, ClipboardText, Trash } from 'phosphor-react';

import { Header } from '../../components/Header';
import { Task, tasksReducer } from '../../reducers/tasks/reducer';

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
import {
  addNewTask,
  deleteTask,
  markTaskDone,
} from '../../reducers/tasks/actions';

export function Home() {
  const [tasksState, dispatch] = useReducer(
    tasksReducer,
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

    if (!title) return;

    const newTask: Task = {
      id: String(new Date().getTime()),
      title,
      isDone: false,
    };

    dispatch(addNewTask(newTask));

    setTitle('');
  }

  function handleMarkTaskDone(id: string) {
    dispatch(markTaskDone(id));
  }

  function handleDeleteTask(id: string) {
    dispatch(deleteTask(id));
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
