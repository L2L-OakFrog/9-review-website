import { Col, Container, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Carousels from '../Carousel/Carousel';
import Featured from '../Featured/Featured';
import './Home.css';

const Home = (props) => {
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
    return (
        <div className='home'>
            {/* Top Banner */}
            <div className='container top-banner'>
                <Container>
                    <Row className='banner'>
                        <Col><h1>Welcome To Arabites</h1>
                            <p>Learn Arabic with ease</p>
                            <Button variant="outline-primary"><NavLink style={styles} activeStyle={actStyles} to='/about'>Learn More</NavLink></Button>{' '}</Col>
                        <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfH4k_Z3Ya-xWqBdqTMsENdCpy_Dj7JKbWyg&usqp=CAU" alt="" /></Col>
                    </Row>
                </Container>
            </div>
            <hr />
            {/* Carousel */}
            <div className='container carousal'>
                <Carousels></Carousels>
            </div>
            <hr />
            {/* 4 Services */}
            <div className='featured'>
                <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;