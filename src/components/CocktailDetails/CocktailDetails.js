import React from 'react';
import { useParams } from 'react-router-dom';

const CocktailDetails = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Cocktail Details Page</h1>
      <p>{`Id: ${id}`}</p>
    </>
  );
};

export default CocktailDetails;
