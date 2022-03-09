import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Top from './components/Top';
import NavBar from './components/NavBar';
import Annonce from './components/Annonce';
import Services from './components/Services';
import Equipment from './components/Equipment';
import reportWebVitals from './reportWebVitals';
import Rendez from './components/Rendez';
import Temoignage from './components/Temoignage';

ReactDOM.render(
  <React.StrictMode>
    <Top />
    <NavBar />
    <Annonce />
    <Services />
    <Rendez />
    <Temoignage />
    <Equipment />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
