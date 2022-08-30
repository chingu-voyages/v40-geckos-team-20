import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCocktailListContext } from '../../context/use-context';
import { Wrapper, Cocktail, CocktailImage } from './CocktailList.styled';
import { CONTEXT_STATUS } from '../../context/constants';
import Spinner from '../UI/Spinner/Spinner';
import { InfoMessage, ErrorMessage } from '../MessageState/MessageState';

const CocktailList = () => {
  const { cocktails, getRandomCocktails } = useCocktailListContext();
  const [currentPage, setCurrentPage] = useState(1);
  const firstRender = useRef(true);

  const { status, error, drinks } = cocktails;
  const { IDLE, LOADING, SUCCESS, ERROR } = CONTEXT_STATUS;

  const allDrinks = drinks?.slice();
  const chunkedCocktails = allDrinks && chunkArrayInGroups(allDrinks, 6);
  const cocktailList = generateCocktailListUI();

  useEffect(() => {
    if (firstRender.current && status === IDLE) {
      firstRender.current = false;
      getRandomCocktails(6);
    }
  }, [getRandomCocktails, status, IDLE]);

  

  function chunkArrayInGroups(arr, size) {
    let chunkedCocktails = [];
    for(let i = 0; i < arr.length; i += size) {
      chunkedCocktails.push(arr.slice(i, i+size));
    }
    return chunkedCocktails;
  }

  function generateCocktailListUI() {
    if (chunkedCocktails) {
      const cocktailList = chunkedCocktails[currentPage - 1].map((cocktail, i) => {
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
      return cocktailList;
    }
  }

  const haveDrinks = cocktailList?.length;

  return (
    <>
      {status === LOADING && <Spinner />}
      {status === SUCCESS && haveDrinks && <Wrapper>{cocktailList}</Wrapper>}
      {status === SUCCESS && !haveDrinks && (
        <InfoMessage
          title='No cocktails to display'
          message='Please try searching again, or adjust the filters you may have selected.'
        />
      )}
      {status === ERROR && (
        <ErrorMessage title='Error loading cocktails' message={error.message} />
      )}
    </>
  );
};

export default CocktailList;
