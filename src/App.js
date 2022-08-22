import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components/macro';
import Header from './components/Header';
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
  background-image: url('https://s3-alpha-sig.figma.com/img/2662/ea6e/ae160c90bd9a0f5c8f65ec3b0477f53e?Expires=1661126400&Signature=AGgsfY6pEsDBU0hwjKHyTudoQvZg2NaZbFSbOsjONAI-NWH8G0uYw4opAZ6zPftX0JppzSkNAuoaqVCdnb-JkeBmrg88cCop1F9bl938Dpxd3ZEBC9AAUW13bQP6FNLQkVbcIOGVVV4dd0wC8n~0KToTwqvuYyg4TtjvP8zn2GSS5xh35wGq0L5DcjDaZQMaTsqL5rd~tejv759jQ5b9wJPdVC8j6c5UmiWFaiy44VIyn0gIg8dfCbxzDA0sl1101Z4247jtYXL01MKnzSri2RVh0~IrXJgdMYtRxlI~Kj~MbSS5WnZDgMDgC~tF~K9RfmyhDEx6iRY~pqobIySo9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
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
            <Route path='/cocktails/:id' element={<CocktailDetailsPage />} />
            <Route exact path='/cocktails' element={<Navigate to='/' />} />
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
