import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCocktailListContext } from '../../context/use-context';
import { Wrapper, Cocktail, CocktailImage } from './CocktailList.styled';
import { CONTEXT_STATUS } from '../../context/constants';

const CocktailList = () => {
  const { cocktails, getRandomCocktails } = useCocktailListContext();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current && cocktails.status === CONTEXT_STATUS.IDLE) {
      firstRender.current = false;
      getRandomCocktails(6);
    }
  }, [getRandomCocktails, cocktails.status]);

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
