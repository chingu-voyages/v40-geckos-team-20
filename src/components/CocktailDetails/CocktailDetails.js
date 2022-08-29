import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
  const id = +useParams().id;

  // use id to update selected cocktail

  /**
   * @hyemi - when you integrate the CocktailDetails with the Context API, you can delete the following two lines and in the useDocumentTitle hook, you can replace cocktailName with the name of the cocktail you are pulling in from selectedCocktail.  This will then display the cocktail's name in the browser tab title.
   */
  const selectedCocktail = { data: { strDrink: 'Test Cocktail Name' } };
  const cocktailName = selectedCocktail?.data?.strDrink;
  /** */

  useSetDocumentTitle(cocktailName);

  return (
    <Wrapper>
      <Header>
        <CocktailImage
          src='https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg/preview'
          alt='Sazerac'
        />
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
              Rinse a chilled rocks glass with absinthe, discarding any excess,
              and set aside.
            </RecipeItem>
            <RecipeItem>
              In a mixing glass, muddle the sugar cube, water and the Peychaud’s
              and Angostura bitters.
            </RecipeItem>
            <RecipeItem>
              Add the rye and cognac, fill the mixing glass with ice and stir
              until well-chilled.
            </RecipeItem>
            <RecipeItem>Strain into the prepared glass. </RecipeItem>
            <RecipeItem>
              Twist the lemon peel over the drink’s surface to express the
              peel’s oils, then garnish with the peel.{' '}
            </RecipeItem>
          </RecipeContent>
        </RecipeWrapper>
      </Main>
      <Link to='/'>Back</Link>
    </Wrapper>
  );
};

export default CocktailDetails;
