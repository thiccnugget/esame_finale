import React from 'react';
import { Button, Card, CardImg } from 'react-bootstrap';

const CustomCard = (props: { title: string, content: string, img?:string } ) => {
    const {title, content, img} = props;
    return(
        <Card style={{ width: '18rem' }}>
        {img && <Card.Img variant="top" src={img} />}
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {content}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    )
};

export default CustomCard;