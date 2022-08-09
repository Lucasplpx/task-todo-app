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

export function Home() {
  return (
    <Container>
      <Header />
      <TodoContainer>
        <NewTaskContainer>
          <input type='text' placeholder='Adicione uma nova tarefa' />
          <button type='submit'>
            Criar <PlusCircle size={24} />
          </button>
        </NewTaskContainer>
        <TasksContainer>
          <TaskInfoContainer>
            <TasksCreated>
              <p>Tarefas criadas</p>
              <span>5</span>
            </TasksCreated>

            <TasksDone>
              <p>Concluídas</p>
              <span>2 de 5</span>
            </TasksDone>
          </TaskInfoContainer>

          {/* <TasksEmptyContainer>
            <ClipboardText size={64} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </TasksEmptyContainer> */}

          <TaskItem>
            <Wrapper>
              <input type='checkbox' />
            </Wrapper>

            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button>
              <Trash size={24} />
            </button>
          </TaskItem>

          <TaskItem>
            <Wrapper>
              <input type='checkbox' />
            </Wrapper>

            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button>
              <Trash size={24} />
            </button>
          </TaskItem>

          <TaskItem isDone>
            <Wrapper>
              <input type='checkbox' checked />
            </Wrapper>

            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button>
              <Trash size={24} />
            </button>
          </TaskItem>
        </TasksContainer>
      </TodoContainer>
    </Container>
  );
}
