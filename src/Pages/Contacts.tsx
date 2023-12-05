import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../Models/Product";
import { User, UserResult } from "../Models/User";
import { useParams } from "react-router-dom";


const Contacts = () => {

    const {id} = useParams();
    const [product, setProduct] = useState<Product>();
    const [user, setUser] = useState<UserResult>();

    
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
    

    return(<></>);
}

export default Contacts;