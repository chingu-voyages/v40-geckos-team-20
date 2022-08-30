import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/imports.css';
import App from './App';
import { GlobalContextProvider } from './context/use-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
