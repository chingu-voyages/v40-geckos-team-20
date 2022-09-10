import styled, { css } from 'styled-components/macro';

export const ButtonStyles = css`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  &:disabled {
    background-color: var(--primary-disabled);
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  &:hover:not(:disabled) {
    background-color: var(--primary-color-dark);
  }
`;

export const Button = styled.button`
  ${ButtonStyles}
`;
