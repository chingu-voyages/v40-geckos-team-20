import styled from 'styled-components/macro';

export const Wrapper = styled.article`
  color: white;
  font-size: 1.2rem;
  line-height: 2;
`

export const Header = styled.header`
  padding: 32px;
  display: grid;
  gap: 16px;
  justify-items: center;
  align-items: center;
`

export const CocktailImage = styled.img`
  width: 40%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 1px solid #CA0000;
`

export const CocktailName = styled.h2`
  color: #ca0000;
  font-family: "Oswald", sans-serif;
  font-size: 3rem;
  letter-spacing: 1px;
  line-height: 1;
`

export const Main = styled.section`
  display: flex;
  padding-top: 24px;
  justify-content: space-between;
`

export const IngredientsWrapper = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const IngredientsTitle = styled.h3`
  font-family: "Oswald", sans-serif;
  font-size: 2rem;
  letter-spacing: 1.5px;
`

export const IngredientsContent = styled.ul`
  
`

export const IngredientsItem = styled.li`
  
`

export const RecipeWrapper = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const RecipeTitle = styled.h3`
  font-family: "Oswald", sans-serif;
  font-size: 2rem;
  letter-spacing: 1.5px;
`

export const RecipeContent = styled.section`

`

export const RecipeItem = styled.p`

`
