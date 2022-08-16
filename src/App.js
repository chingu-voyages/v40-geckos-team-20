import './App.css';

import TestContextCocktailList from './components/_TestComponents/TestContextCocktailList';
import TestContextSelectedCocktail from './components/_TestComponents/TestContextSelectedCocktail';
import TestContextFilters from './components/_TestComponents/TestContextFilters';

function App() {
  return (
    <div className='App'>
      <h1>EZ Cocktails</h1>
      {/* Header */}
      {/* Search Bar */}
      {/* Cockail List */}
      {/* Cocktail Details Preview*/}
      {/* Some new bug fix! */}
      {/* FOR CODE REVIEW / TESTING - ADD THE FOLLOWING TWO COMPONENTS */}
      <TestContextFilters />
      <TestContextCocktailList />
      <TestContextSelectedCocktail />
    </div>
  );
}

export default App;
