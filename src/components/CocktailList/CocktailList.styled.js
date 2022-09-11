import styled from 'styled-components/macro';
import Media from '../../styles/Media';

export const Wrapper = styled.ul`
  color: pink;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 5rem;
  list-style-type: none;
  padding-left: 0;

  a {
    text-decoration: none;
  }

  ${Media.upToLaptop`
    gap: 3rem;
  `}

  ${Media.upToTablet`
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  `}

  ${Media.upToPhone`
    grid-template-columns: 1fr;
    gap: 3rem;
  `}
`;

export const CocktailName = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;

  ${Media.upToTablet`
    display: block;
    position: static;
    transform: translate(0,0)
  `}
`;

export const CocktailImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 1px solid #ca0000;
  border-radius: 6px;

  ${Media.upToTablet`
    margin-bottom: 1rem;
  `}
`;

export const Cocktail = styled.li`
  position: relative;
  &:hover {
    transform: scale(1.02);
    background-color: black;
    border-radius: 6px;
  }

  &:hover ${CocktailName} {
    display: block;
  }
  &:hover ${CocktailImage} {
    opacity: 0.3;
    border: none;
  }

  &:active {
    transform: scale(0.99);
  }

  transition: transform 0.1s ease-in-out;
`;
