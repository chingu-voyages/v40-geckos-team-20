import styled from 'styled-components/macro';
import { ButtonStyles } from '../UI/Button.styled';

export const BackCTAWrapper = styled.div`
  visibility: ${(props) => (props.notRoot ? 'visible' : 'hidden')};
  position: absolute;
  left: 0;
  width: 160px;
  text-align: center;

  ${ButtonStyles}/* background-color: var(--primary-color);
  width: 160px;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;


  &:hover,
  &:focus {
    background-color: var(--primary-color-dark);
  } */
`;

export const HeaderWrapper = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  a {
    display: inline-block;
    text-decoration: none;
    color: white;

    img {
      margin-bottom: 0px;
      width: 151px;
      height: 141px;
    }
  }

  h1 {
    margin-top: 0px;
    font-size: 80px;
    color: var(--primary-color);
    font-family: 'Oswald', sans-serif;
  }
`;
