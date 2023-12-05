import React, { useEffect, useState } from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import { FiMail, FiPhone } from 'react-icons/fi'; // Import the phone icon from react-icons
import './productFooter.css';
import CustomModal from '../Modal/CustomModal';
import { UserResult } from '../../Models/User';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductFooter = (props:{ id?: number, itemTitle?: string, price?: number }) => {

    const navigate = useNavigate();

    const {id, itemTitle, price} = props;

    const [user, setUser] = useState<UserResult>();

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
        <div>
            <footer className="footer">
                <Container className='footer-center'>
                    <div className="left">
                        <p>{itemTitle}</p>
                        <p>€{price}</p>
                    </div>
                    <div className="right">
                        <button onClick={handleShowModal} className="phone-button mr-3">
                            <FiPhone size={20} />
                        </button>
                        
                        <button onClick={() => navigate(`/contact/${id}`)} className="contact-button">
                            <FiMail size={20}/> Contact Seller
                        </button>
                    </div>
                </Container>
            </footer>

            <CustomModal content={user?.results[0].cell} show={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default ProductFooter;
