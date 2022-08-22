import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Link key={i} to={`/cocktails/${cocktail.idDrink}`}>
        <Cocktail>
          <CocktailImage
            src={`${cocktail.strDrinkThumb}/preview`}
            alt={cocktail.strDrink}
          />
        </Cocktail>
      </Link>
    );
  });

  return <Wrapper>{randomCocktails}</Wrapper>;
};

export default CocktailList;
