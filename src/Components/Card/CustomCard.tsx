import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomCard = (props: { title: string, price: number, id: number, img?: string }) => {
  const { title, price, id, img } = props;
  return (
    <Card className='col-12 col-md-12 col-lg-10' style={{ height: '100%' }}>
      <div className="row">
        {img && (
          <Card.Img src={img} style={{ height: '6rem', width: 'auto' }} className="col-md-6 pl-5 p-3" />
        )}
        <Card.Body className="col-6">
          <Card.Title style={{ fontSize: '16px' }}>{title}</Card.Title>
          <div className="d-flex">
            <Card.Text className='mr-4'>€{price}  </Card.Text>
            <Link to={'/contact/' + id}>  Contact</Link>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default CustomCard;
