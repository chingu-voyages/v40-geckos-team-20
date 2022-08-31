import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelectedCocktailContext } from '../../context/use-context';
import { CONTEXT_STATUS } from '../../context/constants';
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
} from './CocktailDetails.styled';
import useSetDocumentTitle from '../../hooks/use-setDocumentTitle';

const CocktailDetails = () => {
  const { selectedCocktail, updateSelectedCocktail } =
    useSelectedCocktailContext();
  const { data, status } = selectedCocktail;
  const { IDLE, LOADING, SUCCESS, ERROR } = CONTEXT_STATUS;
  const id = +useParams().id;

  useEffect(() => {
    updateSelectedCocktail(id);
  }, [id]);

  let ingredientsUI;
  let recipesUI;

  if (status === SUCCESS) {
    ingredientsUI = createIngredientsUI();
    recipesUI = createRecipesUI();
  }

  // If we have a cocktail name, add it to the browser tab title
  useSetDocumentTitle(status === SUCCESS && data?.strDrink);

  function createIngredientsUI() {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      const propertyName = `strIngredient${i}`;
      data[propertyName] && ingredients.push(data[propertyName]);
    }

    const ingredientsUI = ingredients.map((ingredient) => {
      return <IngredientsItem key={ingredient}>{ingredient}</IngredientsItem>;
    });

    return ingredientsUI;
  }

  function createRecipesUI() {
    const recipes = data.strInstructions.split('. ');
    const recipesUI = recipes.map((recipe, i) => {
      return <RecipeItem key={i}>{recipe}</RecipeItem>;
    });

    return recipesUI;
  }

  return (
    <Wrapper>
      <Header>
        <CocktailImage
          src={data && data.strDrinkThumb}
          alt={data && data.strDrink}
        />
        <CocktailName>{data && data.strDrink}</CocktailName>
      </Header>
      <Main>
        <IngredientsWrapper>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsContent>{ingredientsUI}</IngredientsContent>
        </IngredientsWrapper>
        <RecipeWrapper>
          <RecipeTitle>Recipe</RecipeTitle>
          <RecipeContent>{recipesUI}</RecipeContent>
        </RecipeWrapper>
      </Main>
      <Link to='/'>Back</Link>
    </Wrapper>
  );
};

export default CocktailDetails;
