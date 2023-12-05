import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import CustomCard from '../Components/Card/CustomCard';
import { Product } from '../Models/Product';
import CustomSidebar from '../Components/Sidebar/CustomSidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Products = () => {

  const {category} = useParams();

  const [products, setProducts] = useState<Product[]>([]);

  let url = "https://fakestoreapi.com/products";
  if(category != null){
    let a = category.replace(/\s/g, "%20");
    url += `/category/${a}`;
  }

  useEffect(() => {
    console.log(category, url)
    axios.get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, [category]);

  return (
    <div className='row mt-5'>
      <div className='col-md-4'>
        <CustomSidebar />
      </div>
      <div className='col-md-8'>
        <Container>
          <Row>
            {products.map((product) => (
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <Col key={product.id} xs={12} className='p-4'>
                  <CustomCard title={product.title} price={product.price} id={product.id} img={product.image} />
                </Col>
              </Link>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
