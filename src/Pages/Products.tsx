import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import CustomCard from '../Components/Card/CustomCard';
import { Product } from '../Models/Product';

const Products = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} className='p-4'>
            <CustomCard title={product.title} price={product.price} id={product.id} img={product.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
