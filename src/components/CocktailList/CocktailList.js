import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCocktailListContext } from '../../context/use-context';
import { Wrapper, Cocktail, CocktailImage } from './CocktailList.styled';
import { CONTEXT_STATUS } from '../../context/constants';
import Spinner from '../UI/Spinner/Spinner';
import { InfoMessage, ErrorMessage } from '../MessageState/MessageState';
import Pagination from '../UI/Pagination/Pagination';

const CocktailList = () => {
  const { cocktails, getRandomCocktails } = useCocktailListContext();
  const [chunkedCocktails, setChunkedCocktails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const firstRender = useRef(true);
  const cocktailsPerPage = 9;

  const { status, error, drinks } = cocktails;
  const { IDLE, LOADING, SUCCESS, ERROR } = CONTEXT_STATUS;

  const haveDrinks = drinks?.length;

  // Only on first render when cocktail API call is idle, render random listof cocktails
  useEffect(() => {
    if (firstRender.current && status === IDLE) {
      firstRender.current = false;
      getRandomCocktails(cocktailsPerPage);
    }
  }, [getRandomCocktails, status, IDLE]);

  // If Context API returns a freshlist of cocktails, (re)generate and save chunkedCocktails and set current page to 1
  useEffect(() => {
    setCurrentPage(1);
    if (haveDrinks) {
      function chunkArrayInGroups(arr, size) {
        let chunkedCocktails = [];
        for (let i = 0; i < arr.length; i += size) {
          chunkedCocktails.push(arr.slice(i, i + size));
        }
        return chunkedCocktails;
      }
      const chunkedDrinks = chunkArrayInGroups(drinks, cocktailsPerPage);
      setChunkedCocktails(chunkedDrinks);
    }
  }, [haveDrinks, drinks]);

  const cocktailList =
    status === SUCCESS &&
    haveDrinks &&
    generateCocktailListUI(chunkedCocktails[currentPage - 1]);

  function generateCocktailListUI(drinksToShow) {
    if (drinksToShow) {
      const cocktailList = drinksToShow.map((cocktail, i) => {
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

  function handlePageClick(pageNum) {
    setCurrentPage(pageNum);
  }

  return (
    <>
      {status === LOADING && <Spinner />}
      {status === SUCCESS && haveDrinks && <Wrapper>{cocktailList}</Wrapper>}
      {status === SUCCESS && drinks.length > cocktailsPerPage && (
        <Pagination
          chunkedCocktails={chunkedCocktails}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      )}
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
