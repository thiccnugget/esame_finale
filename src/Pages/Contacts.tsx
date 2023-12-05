import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../Models/Product";
import { User, UserResult } from "../Models/User";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import CustomToast from "../Components/Toast/CustomToast";


const Contacts = () => {
    const [show, setShow] = useState(false);
    const {id} = useParams();
    const [product, setProduct] = useState<Product>();
    const [user, setUser] = useState<UserResult>();

    const handleToast = useEffect(()=>{
      setShow(true);
    }, [show])
    
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

    //User GET
    useEffect(() => {
    axios.get('https://randomuser.me/api/?results=1')
        .then((response) => {
        setUser(response.data);
        })
        .catch((error) => {
        console.error('Error fetching data from API:', error);
        });
    }, []);
    

  
    return (
      <Form className="my-5">
        <h3>Product: {product?.title}</h3>
        <h4>{`Contact: ${user?.results[0].email}`}</h4>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <CustomToast title="Info" description="Message Sent!" show={show}/>
      </Form>
    );
}

export default Contacts;
