import styled from "styled-components/macro";

export const Wrapper = styled.ul`
  color: pink;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  display: grid;
  gap: 40px;
  list-style-type: none;
  padding-left: 0;
`;

export const Cocktail = styled.li`
 
`;

export const CocktailImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 1px solid #CA0000;
`;