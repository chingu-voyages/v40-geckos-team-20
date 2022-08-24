import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Wrapper,
  Header,
  CocktailImage,
  CocktailName,
  Main,
  IngredientsWrapper,
  IngredientsTitle,
  IngredientsContent,
  IngredientsItem,
  RecipeWrapper,
  RecipeTitle,
  RecipeContent,
  RecipeItem,
} from "./CocktailDetails.styled";

const CocktailDetails = () => {
  const id = +useParams().id;

  // use id to update selected cocktail

  return (
    <Wrapper>
      <Header>
        <CocktailImage />
        <CocktailName>Sazerac</CocktailName>
      </Header>
      <Main>
        <IngredientsWrapper>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsContent>
            <IngredientsItem>2 ounces of rye bourbon</IngredientsItem>
            <IngredientsItem>1/4 ounce simple syrup</IngredientsItem>
            <IngredientsItem>2 dashes angusta bitters</IngredientsItem>
            <IngredientsItem>Orange peel for garnish</IngredientsItem>
          </IngredientsContent>
        </IngredientsWrapper>
        <RecipeWrapper>
          <RecipeTitle>Recipe</RecipeTitle>
          <RecipeContent>
            <RecipeItem>
            Rinse a chilled rocks glass with absinthe, discarding any excess, and set aside.
            </RecipeItem>
            <RecipeItem>
              In a mixing glass, muddle the sugar cube, water and the Peychaud’s and Angostura bitters.
            </RecipeItem>
            <RecipeItem>
              Add the rye and cognac, fill the mixing glass with ice and stir until well-chilled.
            </RecipeItem>
            <RecipeItem>
              Strain into the prepared glass.            </RecipeItem>
            <RecipeItem>
              Twist the lemon peel over the drink’s surface to express the peel’s oils, then garnish with the peel.            </RecipeItem>
          </RecipeContent>
        </RecipeWrapper>
      </Main>
      <Link to="/">Back</Link>
    </Wrapper>
  );
};

export default CocktailDetails;
