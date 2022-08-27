import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCocktailListContext } from '../../context/use-context';
import { Wrapper, Cocktail, CocktailImage } from './CocktailList.styled';
import { CONTEXT_STATUS } from '../../context/constants';
import Spinner from '../UI/Spinner/Spinner';

const CocktailList = () => {
  const { cocktails, getRandomCocktails } = useCocktailListContext();
  const firstRender = useRef(true);

  const { status, error, drinks } = cocktails;
  const { IDLE, LOADING, SUCCESS, ERROR } = CONTEXT_STATUS;

  useEffect(() => {
    if (firstRender.current && status === IDLE) {
      firstRender.current = false;
      getRandomCocktails(6);
    }
  }, [getRandomCocktails, status, IDLE]);

  const cocktailList = drinks?.map((cocktail, i) => {
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

  const haveDrinks = cocktailList?.length;

  return (
    <>
      {status === LOADING && <Spinner />}
      {status === SUCCESS && haveDrinks && <Wrapper>{cocktailList}</Wrapper>}
      {status === SUCCESS && !haveDrinks && <p>{'No drinks!'}</p>}
      {status === ERROR && <p>{error.message}</p>}
    </>
  );
};

export default CocktailList;
