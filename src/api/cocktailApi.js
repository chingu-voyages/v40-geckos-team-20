/*
Maps to endpoints at Cocktail DB API: https://www.thecocktaildb.com/api.php
*/

import sendHttpRequest from '../utils/sendHttpRequest';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
const URL = {
  SEARCH: `${BASE_URL}/search.php?s=`,
  RANDOM: `${BASE_URL}/random.php`,
  GET_COCKTAIL: `${BASE_URL}/lookup.php?i=`,
  FILTER: `${BASE_URL}/filter.php?i=`,
  FILTER_LIST: `${BASE_URL}/list.php?`,
};

const searchByName = (searchTerm = '') => {
  if (typeof searchTerm !== 'string' && typeof searchTerm !== 'number')
    throw new Error('searchByName api method called with invalid searchTerm!');
  const results = sendHttpRequest({
    url: `${URL.SEARCH}${searchTerm}`,
  });
  return results;
};

const searchByIngredient = (searchTerm = '') => {
  if (typeof searchTerm !== 'string' && typeof searchTerm !== 'number')
    throw new Error('searchByName api method called with invalid searchTerm!');
  const results = sendHttpRequest({
    url: `${URL.FILTER}${searchTerm}`,
  });
  return results;
};

const getRandomCocktail = () => {
  const results = sendHttpRequest({
    url: URL.RANDOM,
  });
  return results;
};

const getCocktailDetails = (id) => {
  if (!id) throw new Error('getCocktailDetails api method called with no id!');
  if (typeof id !== 'number')
    throw new Error(
      'getCocktailDetails api method must be called with an id that is a number!'
    );
  const results = sendHttpRequest({
    url: `${URL.GET_COCKTAIL}${id}`,
  });
  return results;
};

const getFilterListOfCategories = () =>
  sendHttpRequest({
    url: `${URL.FILTER_LIST}c=list`,
  });

const getFilterListOfGlasses = () =>
  sendHttpRequest({
    url: `${URL.FILTER_LIST}g=list`,
  });

const getFilterListOfAlcoholic = () =>
  sendHttpRequest({
    url: `${URL.FILTER_LIST}a=list`,
  });

export {
  searchByName,
  searchByIngredient,
  getRandomCocktail,
  getCocktailDetails,
  getFilterListOfCategories,
  getFilterListOfGlasses,
  getFilterListOfAlcoholic,
};
