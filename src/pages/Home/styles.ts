import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1444px;
  margin: 0 auto;
`;

export const TodoContainer = styled.div`
  max-width: 736px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const NewTaskContainer = styled.form`
  display: flex;
  align-items: center;

  gap: 8px;
  margin-top: -27px;

  input {
    flex: 1;
    height: 3.375rem;
    padding: 1rem;
    background: ${({ theme }) => theme['gray-500']};
    color: ${({ theme }) => theme['gray-100']};
    border: 1px solid ${({ theme }) => theme['gray-700']};
    border-radius: 0.5rem;
  }

  button {
    flex: 0.15;
    height: 3.25rem;
    background: ${({ theme }) => theme['blue-dark']};
    color: ${({ theme }) => theme['gray-100']};
    border: 0px;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme['blue-100']};
    }
  }
`;

export const TasksContainer = styled.div`
  flex: 1;
`;
