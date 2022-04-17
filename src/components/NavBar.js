import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import logoehc from '../logoehc.webp'
import React from "react";
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link
  } from "react-router-dom";
import Apropos from './Apropos';
import Index from '../index'


function NavBar() {
  return (
    <div id='positionNav'>
        <Navbar   className='mx-4' collapseOnSelect expand="lg" bg="" variant="light">
            <Navbar.Brand href="#Top">
                <img width={60} height={40}
                src={logoehc} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav style={
                        {textAlign:"center"}
                    }>
                    <Nav.Link href="#Acceuil">Acceuil</Nav.Link>
                    <Nav.Link href="#Service">Services</Nav.Link>
                    {/* <Nav.Link href="#Partenariat">Partenariat</Nav.Link> */}
                    <Nav.Link href="#Recrutement">Recrutement</Nav.Link>
                    <Nav.Link href="#Apropos">A Propos</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>

  );
}
export default NavBar;
