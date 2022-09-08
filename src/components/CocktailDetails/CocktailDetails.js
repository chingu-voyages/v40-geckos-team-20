import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelectedCocktailContext } from '../../context/use-context';
import { CONTEXT_STATUS } from '../../context/constants';
import Spinner from '../UI/Spinner/Spinner';
import { ErrorMessage } from '../MessageState/MessageState';
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
  const { selectedCocktail, updateSelectedCocktail, clearSelectedCocktail } =
    useSelectedCocktailContext();
  const { data, status, error } = selectedCocktail;
  const { IDLE, LOADING, SUCCESS, ERROR } = CONTEXT_STATUS;
  const id = +useParams().id;

  useEffect(() => {
    updateSelectedCocktail(id);
    return clearSelectedCocktail;
  }, [id, updateSelectedCocktail, clearSelectedCocktail]);

  let ingredientsUI;
  let recipesUI;

  if (status === SUCCESS) {
    ingredientsUI = createIngredientsUI();
    recipesUI = createRecipesUI();
  }

  // If we have a cocktail name, add it to the browser tab title
  useSetDocumentTitle(status === SUCCESS && `EZ Cocktails - ${data?.strDrink}`);

  function createIngredientsUI() {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      const IngredientPropName = `strIngredient${i}`;
      const MeasurePropName = `strMeasure${i}`;
      data[IngredientPropName] &&
        ingredients.push({
          strIngredient: data[IngredientPropName],
          strMeasure: data[MeasurePropName] || '',
        });
    }

    const ingredientsUI = ingredients.map((ingredient, i) => {
      return (
        <IngredientsItem key={i}>
          {ingredient.strIngredient}
          {ingredient.strMeasure && ` (${ingredient.strMeasure.trim()})`}
        </IngredientsItem>
      );
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
    <>
      {status === LOADING && <Spinner />}
      {status === SUCCESS && (
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
        </Wrapper>
      )}
      {status === ERROR && (
        <ErrorMessage title='Error loading cocktails' message={error.message} />
      )}
    </>
  );
};

export default CocktailDetails;
