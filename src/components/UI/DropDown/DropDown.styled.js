import styled from 'styled-components/macro';
import { ButtonStyles } from '../Button.styled';
import { css } from 'styled-components/macro';

const flipSvg = css`
  svg {
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
  }
`;

export const DropDownWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 12rem;
  position: relative;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

export const DropDownButton = styled.button`
  /* specific styles */
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ open }) => open && flipSvg}

  /* inherited styles */
  ${ButtonStyles}
`;

export const DropDownItems = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  margin-top: 0.1rem;
  background-color: var(--primary-color);
  min-width: 30px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  border-radius: 3px;
  z-index: 1;
  max-height: 450px;
  overflow-y: auto;
`;

export const DropDownItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--primary-color-light);
  }
`;
