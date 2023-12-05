

 

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = (props: { content?: string, show:boolean, handleClose: () => void }) => {
  const {content, show, handleClose} = props;
  return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Phone number</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{content}</p>
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;
