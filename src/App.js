import './App.css';
import { useCocktailContext } from './context/use-cocktailContext';
import { useEffect } from 'react';

function App() {
  const { cocktails, searchCocktails, getRandomCocktails, clearCocktails } =
    useCocktailContext();

  useEffect(() => {
    // searchCocktails('summer');
    getRandomCocktails(6);
    setTimeout(clearCocktails, 5000);
  }, []);

  console.log(cocktails.status);
  console.log(cocktails.drinks);

  return (
    <div className='App'>
      <h1>EZ Cocktails</h1>
      {/* Header */}
      {/* Search Bar */}
      {/* Cockail List */}
      {/* Cocktail Details Preview*/}
      {/* Some new bug fix! */}
    </div>
  );
}

export default App;
