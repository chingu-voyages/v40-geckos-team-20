import React from 'react';
import { useParams } from 'react-router-dom';

const CocktailDetails = () => {
  const id = +useParams().id;

  return (
    <>
      <h1>Cocktail Details Page</h1>
      <h2>{`Id: ${id}`}</h2>
    </>
  );
};

export default CocktailDetails;
