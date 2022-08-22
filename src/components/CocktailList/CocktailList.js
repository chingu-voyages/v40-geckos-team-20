import React, { useEffect } from 'react';
import { useCocktailListContext } from '../../context/use-context';
import { Wrapper, Cocktail, CocktailImage } from './CocktailList.styled';

const CocktailList = () => {
  const { cocktails, getRandomCocktails } = useCocktailListContext();

  useEffect(() => {
    const clickHandlerRandom = () => getRandomCocktails(6);
    clickHandlerRandom();
  }, []);

  const randomCocktails = cocktails?.drinks?.map((cocktail, i) => {
    return (
      <Cocktail key={i}>
        <CocktailImage
          src={`${cocktail.strDrinkThumb}/preview`}
          alt={cocktail.strDrink}
        />
      </Cocktail>
    );
  });

  return <Wrapper>{randomCocktails}</Wrapper>;
};

export default CocktailList;
