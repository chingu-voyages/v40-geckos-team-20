import './App.css';

import TestContextCocktailList from './components/_TestComponents/TestContextCocktailList';
import TestContextSelectedCocktail from './components/_TestComponents/TestContextSelectedCocktail';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const currentFilters = null;
    // const currentFilters = {
    //   categories: ['a'],
    //   glasses: ['tall'],
    //   alcoholic: ['alcoholic'],
    // };

    const obj = {
      categories: ['a', 'b', 'c'],
      glasses: ['tall', 'short'],
      alcoholic: [],
      random: { a: 1, b: 2 },
      yes: [1, 2, 3, 4, 5],
      okay: 1,
      sometimes: 'hello',
    };

    const myArr = ['categories', 'glasses', 'alcoholic'];

    const mapped = Object.keys(obj)
      .filter((i) => myArr.includes(i))
      .map((i) => ({ [i]: obj[i] }));

    const newObj = mapped.length ? Object.assign(...mapped) : {};

    const newFilters = { ...currentFilters, ...newObj };

    console.log(newFilters);
  }, []);

  return (
    <div className='App'>
      <h1>EZ Cocktails</h1>
      {/* Header */}
      {/* Search Bar */}
      {/* Cockail List */}
      {/* Cocktail Details Preview*/}
      {/* Some new bug fix! */}
      {/* FOR CODE REVIEW / TESTING - ADD THE FOLLOWING TWO COMPONENTS */}
      {/* <TestContextCocktailList />
      <TestContextSelectedCocktail /> */}
    </div>
  );
}

export default App;
