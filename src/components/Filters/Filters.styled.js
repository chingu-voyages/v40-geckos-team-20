import styled from 'styled-components/macro';
import Media from '../../styles/Media';
import { DropDownWrapper } from '../UI/DropDown/DropDown.styled';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem auto 2.5rem;
  max-width: 50rem;

  ${Media.upToTablet`
    justify-content: space-between;
  `}

  ${Media.upToPhone`
    flex-direction: column;
  `}

  ${DropDownWrapper} {
    width: 15rem;

    ${Media.upToLaptop`
    width: 30%;
    `}
    ${Media.upToPhone`
      width: 100%;
      margin-bottom: 1.5rem;
    `}
  }
`;
