import styled from 'styled-components/macro';
import { ButtonStyles } from '../UI/Button.styled';
import Media from '../../styles/Media';

export const HeaderWrapper = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  .back-cta {
    visibility: ${(props) => (props.notRoot ? 'visible' : 'hidden')};
    text-decoration: none;
    position: absolute;
    left: 0;
    width: 160px;
    text-align: center;

    ${ButtonStyles}

    ${Media.upToTablet`
      width: 90px;
    `}

    ${Media.upToPhone`
      width: auto;
    `}
  }

  .logo img {
    margin-bottom: 0px;
    width: 151px;
    height: 141px;
  }

  h1 {
    margin-top: 0px;
    font-size: 80px;
    color: var(--primary-color);
    font-family: 'Oswald', sans-serif;

    ${Media.upToTablet`
      font-size: 60px;
      margin-bottom: 1rem;
    `}
  }
`;
