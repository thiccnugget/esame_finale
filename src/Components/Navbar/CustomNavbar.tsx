import { useState } from "react";
import "./navbar.css";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Link to="/">
        <Navbar.Brand className="mx-3">
          Shop4All, Shop With Us!
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="navbar" className="mx-3"/>
      <Navbar.Collapse id="navbar" className='custom-navbar'>
        <Nav className="mt-4 mt-lg-0" >
          <Link to="/" className="mb-2 mb-lg-0 mr-lg-2 text-dark">Products</Link>
          <Link to="/login" className="mb-2 mb-lg-0 mr-lg-2 text-dark">Login</Link>
          <Link to="/sell" className="mb-2 mb-lg-0 mr-lg-2 text-dark">Sell</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;