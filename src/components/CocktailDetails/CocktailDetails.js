import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelectedCocktailContext } from "../../context/use-context";
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
  const { selectedCocktail, updateSelectedCocktail } =
    useSelectedCocktailContext();
  const id = +useParams().id;
  const cocktail = selectedCocktail.data;

  useEffect(() => {
    updateSelectedCocktail(id);
  }, [id]); 

  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const propertyName = `strIngredient${i}`
    if (cocktail) {
      cocktail[propertyName] && ingredients.push(cocktail[propertyName]);
    }
  }

  const ingredientsUI = ingredients.map((ingredient) => {
    return <IngredientsItem key={ingredient}>{ingredient}</IngredientsItem>
  })

  const recipes = cocktail?.strInstructions.split('. ');
  
  const recipesUI = recipes?.map((recipe, i) => {
    return <RecipeItem key={i}>{recipe}</RecipeItem>
  })
  
  return (
    <Wrapper>
      <Header>
        <CocktailImage
          src={cocktail && cocktail.strDrinkThumb}
          alt={cocktail && cocktail.strDrink}
        />
        <CocktailName>{cocktail && cocktail.strDrink}</CocktailName>
      </Header>
      <Main>
        <IngredientsWrapper>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsContent>
            {ingredientsUI}
          </IngredientsContent>
        </IngredientsWrapper>
        <RecipeWrapper>
          <RecipeTitle>Recipe</RecipeTitle>
          <RecipeContent>
            {recipesUI}
          </RecipeContent>
        </RecipeWrapper>
      </Main>
      <Link to="/">Back</Link>
    </Wrapper>
  );
};

export default CocktailDetails;
