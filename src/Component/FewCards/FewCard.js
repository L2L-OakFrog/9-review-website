import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const FewCard = (props) => {
    const styles =
    {
        textDecoration: 'none',
        fontWeight: "bold",
        color: "black",
    }
    const actStyles =
    {
        textDecoration: 'none',
        color: "whitesmoke",
    }
    // Destructuring
    const { name, img, detail, classes, category } = props.info;
    return (
        <Card className='card'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{detail}</Card.Text>
                <Card.Text>Category: {category}</Card.Text>
                <Card.Text>Classes: {classes}</Card.Text>
                <br />
                <Button variant="outline-primary"><NavLink style={styles} activeStyle={actStyles} to='/services'>Details</NavLink></Button>{' '}
            </Card.Body>
        </Card>

    );
};

export default FewCard;