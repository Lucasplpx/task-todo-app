import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 12.5rem;
  background: ${({ theme }) => theme['gray-700']};
  display: flex;
  justify-content: center;
  align-items: center;
`;
