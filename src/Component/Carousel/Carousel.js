import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const Carousels = () => {
    const color = {
        color: "white",
    }
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/f054908bc7ac333d5eaea25b444b3a49/original"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Learn All The Basics To Read Arabic & Quran Within 5 hours Book</h3>
                    <p>Understand Quran</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/52cbbacd51aeb809e998f3ce437f0240/original"
                    alt="Second slide"
                />

                <Carousel.Caption style={color}>
                    <h3>Arabic In Front Of You</h3>
                    <p>Learn Arabic using your knowledge in English.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/874a41ffd626edf19749ab19e6072667/original"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Arabic Language | The Ultimate Arabic Course</h3>
                    <p>So you are already learning Arabic or willing to ? Perfect , This is where i am going to boost your Arabic skills</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousels;