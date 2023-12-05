import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./footer.css";

const CustomFooter: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4 custom-footer">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Shop4All</h5>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>
              Email: <Link to="/contact">info@example.com</Link>
            </p>
            <p>
              Phone: <Link to="/contact"> (123) 456-7890</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;
