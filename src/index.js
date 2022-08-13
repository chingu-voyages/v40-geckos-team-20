import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CocktailListContextProvider from './context/actions/cocktailList-actions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CocktailListContextProvider>
      <App />
    </CocktailListContextProvider>
  </React.StrictMode>
);
