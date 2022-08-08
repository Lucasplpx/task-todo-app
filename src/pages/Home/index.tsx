import { Header } from '../../components/Header';

import { PlusCircle, ClipboardText } from 'phosphor-react';
import {
  Container,
  NewTaskContainer,
  TaskInfoContainer,
  TasksContainer,
  TasksCreated,
  TasksDone,
  TasksEmptyContainer,
  TodoContainer,
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
              <span>0</span>
            </TasksCreated>

            <TasksDone>
              <p>Tarefas Concluídas</p>
              <span>0</span>
            </TasksDone>
          </TaskInfoContainer>

          <TasksEmptyContainer>
            <ClipboardText size={64} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </TasksEmptyContainer>
        </TasksContainer>
      </TodoContainer>
    </Container>
  );
}
