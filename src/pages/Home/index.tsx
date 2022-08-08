import { Header } from '../../components/Header';
import {
  Container,
  NewTaskContainer,
  TasksContainer,
  TodoContainer,
} from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <TodoContainer>
        <NewTaskContainer>
          <input type='text' placeholder='Adicione uma nova tarefa' />
          <button type='submit'>Criar</button>
        </NewTaskContainer>
        <TasksContainer></TasksContainer>
      </TodoContainer>
    </Container>
  );
}
