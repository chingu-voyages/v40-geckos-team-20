import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components/macro';
import Header from './components/Header';
import backgroundImage from './images/background-image.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import CocktailListPage from './pages/CocktailListPage';
import CocktailDetailsPage from './pages/CocktailDetailsPage';

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
    <Router>
      <Background>
        <Wrapper>
          <Header />
          <Routes>
            <Route exact path='/cocktails' element={<Navigate to='/' />} />
            <Route path='/cocktails/:id' element={<CocktailDetailsPage />} />
            <Route index element={<CocktailListPage />} />
          </Routes>
          {/* <TestContextFilters /> */}
          {/* <TestContextCocktailList /> */}
          {/* <TestContextSelectedCocktail /> */}
        </Wrapper>
        <GlobalStyles />
      </Background>
    </Router>
  );
}

export default App;
