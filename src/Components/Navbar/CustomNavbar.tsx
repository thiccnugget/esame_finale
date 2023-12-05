import { useState } from "react";
import "./navbar.css";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Link to="/">
        <Navbar.Brand className="mx-3">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' '}
          React-Bootstrap
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="navbar" className="mx-3"/>
      <Navbar.Collapse id="navbar" className='custom-navbar'>
        <Nav className="mt-4 mt-lg-0" >
          <Link to="/" className="mb-2 mb-lg-0 mr-lg-2">Pricing</Link>
          <Link to="/login" className="mb-2 mb-lg-0 mr-lg-2">Login</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;