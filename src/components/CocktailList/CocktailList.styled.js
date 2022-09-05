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
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.99);
  }
  transition: transform 0.1s ease-in-out;
`;

export const CocktailImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 1px solid #ca0000;
`;

export const ShowingResults = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
`;
