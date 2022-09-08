import styled from "styled-components/macro";

export const Wrapper = styled.ul`
  @media (max-width: 1600px) {
    width: 85%;
    margin: 0 auto;
  }
  color: pink;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  display: grid;
  gap: 80px;
  list-style-type: none;
  padding-left: 0;
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
`;

export const CocktailImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 1px solid #ca0000;
  border-radius: 6px;
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

export const ShowingResults = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
  margin-left: 75px;
`;
