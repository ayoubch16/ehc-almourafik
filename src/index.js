import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Top from './components/Top';
import NavBar from './components/NavBar';
import Annonce from './components/Annonce';
import Services from './components/Services';
import Equipment from './components/Equipment';
import reportWebVitals from './reportWebVitals';
import Temoignage from './components/Temoignage';
import Partenariat from './components/Partenariat';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Comming from './components/Comming';
import Contact from './components/Contact';
import Offres from './components/Offres';
import Apropos from './components/Apropos';

ReactDOM.render(
  <React.StrictMode>
    <Top />
    <NavBar />
    {/* <Comming /> */}
    <Annonce />
    <Services />
    {/* <Equipment /> */}
    <Offres/>
    <Temoignage />
    <Apropos />
    {/* <Partenariat /> */}
    <Contact/>
    <Footer />
    <Copyright />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
