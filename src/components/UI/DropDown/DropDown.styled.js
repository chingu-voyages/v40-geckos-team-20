import styled from 'styled-components/macro';
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
  width: 10rem;
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
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: var(--primary-color-light);
  }
`;

export const DropDownItems = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  margin-top: 0.1rem;
  background-color: var(--primary-color);
  min-width: 30px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 1;
`;

export const DropDownItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  &:first-child {
    padding-top: 10px;
  }
  &:last-child {
    padding-bottom: 10px;
  }
  &:hover {
    background-color: var(--primary-color-light);
  }
`;
