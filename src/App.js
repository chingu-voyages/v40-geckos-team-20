import './App.css';
import CocktailDetailPreview from './components/CocktailDetailPreview/CocktailDetailPreview';
import CocktailList from './components/CocktailList/CocktailList';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components/macro';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import backgroundImage from './images/background-image.jpg';

// import TestContextCocktailList from './components/_TestComponents/TestContextCocktailList';
// import TestContextSelectedCocktail from './components/_TestComponents/TestContextSelectedCocktail';
// import TestContextFilters from './components/_TestComponents/TestContextFilters';

const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  min-height: 100%;
`;

const Wrapper = styled.div`
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 0;
`;

function App() {
  return (
    <Background>
      <Wrapper>
        <Header />
        <SearchBar />
        <CocktailList />
        <CocktailDetailPreview />
        {/* <TestContextFilters /> */}
        {/* <TestContextCocktailList /> */}
        {/* <TestContextSelectedCocktail /> */}
      </Wrapper>
      <GlobalStyles />
    </Background>
  );
}

export default App;
