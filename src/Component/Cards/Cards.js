import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Cards.css';

const Cards = (props) => {
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
    const { name, img, detail, price, rating, classes, students, category } = props.info;
    return (
        <Card className='card'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{detail}</Card.Text>
                <ListGroup className="list-group-flush special">
                    <ListGroupItem><strong>Category:</strong> {category}</ListGroupItem>
                    <ListGroupItem><strong>Total Classes:</strong> {classes}</ListGroupItem>
                    <ListGroupItem><strong>Students Enrolled:</strong> {students}</ListGroupItem>
                    <ListGroupItem><strong>Rating:</strong> {rating}</ListGroupItem>
                    <ListGroupItem><strong>Price:</strong> ${price}</ListGroupItem>
                </ListGroup>
                <br />
                <Button variant="outline-primary"><NavLink style={styles} activeStyle={actStyles} to='/extra'>Enroll Now</NavLink></Button>{' '}
            </Card.Body>
        </Card>
    );
};

export default Cards;