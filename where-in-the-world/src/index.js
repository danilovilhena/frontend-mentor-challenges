import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router"
import Home from './pages/Home';
import Country from './pages/Country';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './index.responsivity.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Home path="/"/>
      <Country path="country/:countryName"/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
