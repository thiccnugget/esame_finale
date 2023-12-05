import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../Models/Product";

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


    return(
        <>
    
        </>
    );
}

export default SingleProduct;