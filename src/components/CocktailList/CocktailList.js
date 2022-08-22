import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCocktailListContext } from '../../context/use-context';
import { Wrapper, Cocktail, CocktailImage } from './CocktailList.styled';

const CocktailList = () => {
  const { cocktails, getRandomCocktails } = useCocktailListContext();

  useEffect(() => {
    const clickHandlerRandom = () => getRandomCocktails(6);
    clickHandlerRandom();
  }, [getRandomCocktails]);

  const randomCocktails = cocktails?.drinks?.map((cocktail, i) => {
    return (
      <Cocktail key={i}>
        <Link to={`/cocktails/${cocktail.idDrink}`}>
          <CocktailImage
            src={`${cocktail.strDrinkThumb}/preview`}
            alt={cocktail.strDrink}
          />
        </Link>
      </Cocktail>
    );
  });

  return <Wrapper>{randomCocktails}</Wrapper>;
};

export default CocktailList;
