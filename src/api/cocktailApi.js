/*
Maps to endpoints at Cocktail DB API: https://www.thecocktaildb.com/api.php
*/

import sendHttpRequest from '../utils/sendHttpRequest';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
const URL = {
  SEARCH: `${BASE_URL}/search.php?s=`,
  RANDOM: `${BASE_URL}/random.php`,
  GET_COCKTAIL: `${BASE_URL}/lookup.php?i=`,
};

const searchByName = (searchTerm = '') => {
  if (typeof searchTerm !== 'string' && typeof searchTerm !== 'number')
    throw new Error('searchByName api method called with invalid searchTerm!');
  const results = sendHttpRequest({
    url: `${URL.SEARCH}${searchTerm}`,
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
  if (typeof id !== 'string' && typeof id !== 'number')
    throw new Error('getCocktailDetails api method called with invalid id!');
  const results = sendHttpRequest({
    url: `${URL.GET_COCKTAIL}${id}`,
  });
  return results;
};

export { searchByName, getRandomCocktail, getCocktailDetails };
