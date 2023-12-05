import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../Models/Product";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./product.css";
import ProductFooter from "../Components/Footer/ProductFooter";

const SingleProduct = () => {

    const {id} = useParams();
    const [product, setProduct] = useState<Product>();

    //Product GET
    useEffect(() => {
        console.log(id);
        axios.get(`https://fakestoreapi.com/products/${id}`)
          .then((response) => {
            setProduct(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data from API:', error);
          });
    }, []);


    return (
        <Container className="d-flex justify-content-center">
            <Row>
                <Col md={6}>
                    <img src={product?.image} alt={product?.title} className="product-image mr-2 my-3" />
                </Col>
                <Col md={6} className="mt-5">
                    <div className="product-category">
                        <h4>{product?.category}</h4>
                    </div>
                    <Card className="mb-5 product-card">
                        <Card.Body>
                            <div className="product-details">
                                <h2 className="card-title">{product?.title}</h2>
                                <h3>€{product?.price}</h3>
                                <Button variant="primary">Buy Now</Button>
                            </div>
                            <div className="contact-link">
                                <Link to={`/contact/${id}`}>Contact Seller</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <ProductFooter id={product?.id} itemTitle={product?.title} price={product?.price} />
        </Container>
    );
}

export default SingleProduct;