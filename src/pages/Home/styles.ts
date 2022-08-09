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
  margin-bottom: 1.5rem;
`;

const CountStyle = css`
  min-width: 1.5rem;
  height: 1.125rem;
  padding: 0 8px;

  font-size: 0.75rem;
  font-weight: 700;

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
    font-weight: 700;
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
    font-weight: 700;
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

interface TaskItemProps {
  isDone?: boolean;
}

export const TaskItem = styled.div<TaskItemProps>`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 12px;
  padding: 1rem;
  margin-bottom: 12px;

  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;

  ${({ isDone }) =>
    isDone
      ? css`
          background: ${({ theme }) => theme['gray-500']};
        `
      : css`
          background: ${({ theme }) => theme['gray-400']};
        `}

  p {
    ${({ isDone }) =>
      isDone &&
      css`
        text-decoration: line-through;
      `}
    font-size: 0.875rem;
    line-height: 1.225rem;
    max-width: 39.5rem;
  }

  button {
    display: inline-block;
    border: 0;
    margin: 0;
    padding: 0;
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      display: flex;
    }

    &:hover {
      display: flex;
      justify-content: center;
      align-items: center;

      background: ${({ theme }) => theme['gray-500']};

      width: 1.5rem;
      height: 1.5rem;

      border-radius: 1px;
    }

    svg {
      cursor: pointer;
      color: ${({ theme }) => theme['gray-300']};

      &:hover {
        color: ${({ theme }) => theme['red-300']};
      }
    }
  }
`;

export const Wrapper = styled.div`
  input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: 2px solid ${({ theme }) => theme['blue-100']};

    :focus {
      outline: 0;
      box-shadow: 0 0 0 0px ${({ theme }) => theme['gray-100']};
    }

    &:hover {
      background-color: ${({ theme }) => theme['blue-dark']};
    }

    &:checked {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='%23f0efef' viewBox='0 0 256 256'%3e%3crect width='14' height='14' fill='none'%3e%3c/rect%3e%3cpolyline points='216 72 104 184 48 128' fill='none' stroke='%23f0efef' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3e%3c/polyline%3e%3c/svg%3e");
      background-color: ${({ theme }) => theme['purple-dark']};
      border-color: ${({ theme }) => theme['purple-dark']};

      &:hover {
        background-color: ${({ theme }) => theme['purple-100']};
        border-color: ${({ theme }) => theme['purple-100']};
      }
    }
  }
`;
