import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomSidebar = () => {
  return (
    <Nav className="d-hidden bg-light sidebar" style={{ height: 'max-co' }}>
      <div className="position-sticky">
        <h2>Categories</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to={`/products/jewelery`}>
              Jewelery
            </Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to={`/products/electronics`}>
             Electronics
            </Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to={`/products/women's clothing`}>
              Women's Clothing
            </Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to={`/products/men's clothing`}>
              Men's Clothing
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default CustomSidebar;
