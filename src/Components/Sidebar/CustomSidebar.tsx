import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomSidebar = () => {
  return (
    <Nav className="d-hidden col-md-3 col-lg-2 bg-light sidebar" style={{ height: '100vh' }}>
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          {/* Add more sidebar items with Link components */}
        </ul>
      </div>
    </Nav>
  );
};

export default CustomSidebar;
