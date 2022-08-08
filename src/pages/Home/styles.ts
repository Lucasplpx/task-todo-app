import styled, { css } from 'styled-components';

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

    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 140%;

    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => theme['blue-100']};
    }
  }
`;

export const TasksContainer = styled.div`
  flex: 1;
  margin-top: 4rem;
`;
export const TaskInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountStyle = css`
  width: 25px;
  height: 19px;

  font-size: 0.75rem;
  font-weight: bold;

  line-height: 0.938rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  background: ${({ theme }) => theme['gray-400']};
`;

export const TasksCreated = styled.div`
  display: flex;
  gap: 8px;

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['blue-100']};
  }

  span {
    ${CountStyle}
  }
`;

export const TasksDone = styled.div`
  display: flex;
  gap: 8px;

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['purple-100']};
  }

  span {
    ${CountStyle}
  }
`;

export const TasksEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-bottom: 16px;
    color: ${({ theme }) => theme['gray-400']};
  }

  p {
    font-weight: 700;
    color: ${({ theme }) => theme['gray-300']};
    line-height: 1.4rem;
  }

  p:last-child {
    font-weight: 400;
  }
`;
