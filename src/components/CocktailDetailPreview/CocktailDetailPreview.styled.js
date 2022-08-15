import styled from "styled-components/macro";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 100px;
`

export const Header = styled.section`
  padding: 32px;
  display: grid;
  grid-template-rows: 80px 1fr;
  gap: 16px;
  justify-items: center;
  align-items: center;
`

export const CocktailName = styled.h2`
  color: #CA0000;
  font-size: 2.5rem;
`

export const CocktailImage = styled.img`
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 1px solid #CA0000;
`

export const Ingredients = styled.section`
  color: white;
  font-size: 1.4rem;
  padding: 32px;
  display: grid;
  grid-template-rows: 80px 1fr;
  gap: 16px;
  justify-items: center;
  align-items: center;
`

export const IngredientsTitle = styled.h3`
  font-size: 1.8rem;
`

export const IngredientsContent = styled.ul`
  align-self: start;
`

export const IngredientsItem = styled.li`
  margin-bottom: 0.8rem;
`

export const RecipeDetailsBtn = styled.button`
  padding: 8px 16px;
  background-color: #CA0000;
  color: white;
  font-weight: bold;
  grid-column: 2 / 3;
  width: 160px;
  justify-self: end;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #de0404;
  }

`