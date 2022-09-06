/*
Maps to endpoints at Cocktail DB API: https://www.thecocktaildb.com/api.php
*/

import sendHttpRequest from '../utils/sendHttpRequest';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
const URL = {
  SEARCH: `${BASE_URL}/search.php?s=`,
  RANDOM: `${BASE_URL}/random.php`,
  GET_COCKTAIL: `${BASE_URL}/lookup.php?i=`,
  FILTER: `${BASE_URL}/filter.php?`,
  FILTER_LIST: `${BASE_URL}/list.php?`,
};

/**
 * SEARCH BY NAME
 */
const searchByName = (searchTerm = '') => {
  if (typeof searchTerm !== 'string' && typeof searchTerm !== 'number')
    throw new Error('searchByName api method called with invalid searchTerm!');
  const results = sendHttpRequest({
    url: `${URL.SEARCH}${searchTerm}`,
  });
  return results;
};

/**
 * SEARCH BY INGREDIENT
 */
const searchByIngredient = async (searchTerm = '') => {
  if (typeof searchTerm !== 'string' && typeof searchTerm !== 'number')
    throw new Error('searchByName api method called with invalid searchTerm!');

  try {
    const results = await sendHttpRequest({
      url: `${URL.FILTER}i=${searchTerm}`,
    });

    return results;
  } catch (error) {
    // There's  quirk with the Cocktail DB api where if you pass an ingredient name that does not exist, the response is broken and cannot be .json()-ed, so adding a try/catch here to catch that scenario and return null in that case (instead of failing)
    if (error.message === 'Unexpected end of JSON input') return null;
    throw error;
  }
};

/**
 * GET RANDOM COCKTAIL
 */
const getRandomCocktail = () => {
  const results = sendHttpRequest({
    url: URL.RANDOM,
  });
  return results;
};

/**
 * GET DETAILS FOR A SINGLE COCKTAIL
 */
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

/**
 * GET LIST OF FILTER VALUES
 */
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
