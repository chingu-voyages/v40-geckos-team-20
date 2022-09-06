import styled from 'styled-components/macro';
import Media from '../../styles/Media';

export const Wrapper = styled.article`
  color: white;
  font-size: 1.2rem;
  line-height: 2;
`;

export const Header = styled.header`
  padding: 32px;
  display: grid;
  gap: 16px;
  justify-items: center;
  align-items: center;
`;

export const CocktailImage = styled.img`
  width: 25rem;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 1px solid #ca0000;
`;

export const CocktailName = styled.h2`
  color: #ca0000;
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  letter-spacing: 1px;
  line-height: 1.2;
  text-align: center;
`;

export const Main = styled.section`
  display: flex;
  padding-top: 24px;
  justify-content: space-between;

  ${Media.upToPhone`
    flex-direction: column;
  `}
`;

export const IngredientsWrapper = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  ${Media.upToPhone`
    width: 100%;
  `}
`;

export const IngredientsTitle = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  letter-spacing: 1.5px;
`;

export const IngredientsContent = styled.ul`
  ${Media.upToPhone`
    padding: 0;
  `}
`;

export const IngredientsItem = styled.li`
  ${Media.upToPhone`
    list-style: none;
    text-align: center;
  `}
`;

export const RecipeWrapper = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  ${Media.upToTablet`
    width: 50%;
  `}

  ${Media.upToPhone`
    width: 100%;
    margin-top: 2rem;
  `}
`;

export const RecipeTitle = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  letter-spacing: 1.5px;
`;

export const RecipeContent = styled.section``;

export const RecipeItem = styled.p`
  line-height: 1.5;
  margin-bottom: 1rem;
  ${Media.upToPhone`
    text-align: center;
  `}
`;
