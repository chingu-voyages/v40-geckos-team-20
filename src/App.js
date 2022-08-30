import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components/macro';
import Header from './components/Header/Header';
import backgroundImage from './images/background-image.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import CocktailListPage from './pages/CocktailListPage';
import CocktailDetailsPage from './pages/CocktailDetailsPage';
import { QuestionMessage } from './components/MessageState/MessageState';
import ScrollToTop from './utils/ScrollToTop';

/*import TestContextCocktailList from "./components/_TestComponents/TestContextCocktailList";*/
/*import TestContextSelectedCocktail from "./components/_TestComponents/TestContextSelectedCocktail";*/
/*import TestContextFilters from "./components/_TestComponents/TestContextFilters";*/

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
      <ScrollToTop />
      <Background>
        <Wrapper>
          <Header />
          <Routes>
            <Route path='/cocktails/:id' element={<CocktailDetailsPage />} />
            <Route exact path='/cocktails' element={<Navigate to='/' />} />
            <Route index element={<CocktailListPage />} />
            <Route
              path='*'
              element={
                <QuestionMessage
                  title='404! Page not found'
                  message='We cannot find that page; please check the url.'
                />
              }
            />
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
