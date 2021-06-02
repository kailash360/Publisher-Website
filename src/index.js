import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomeCarousel from './components/homepage/Home-carousel';
import Products from './components/homepage/Product-Cards';
import Footer from './components/homepage/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HomeCarousel />
    <Products />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
