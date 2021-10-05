import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const Carousels = () => {
    const color = {
        color: "white",
    }
    const size = {
        width: "100%",
    }
    return (
        <Carousel style={size} className='carousels' variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/1965312.jpg"
                    alt="First slide"
                />
                <Carousel.Caption style={color}>
                    <p>Understand Quran</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/86648305_100305714895875_2083324266891182080_n.png?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=XXmhccFIjPEAX_hPvBc&_nc_oc=AQkZBQt7Bw71mwc_gWLR187LKnoQ6gHfRRWfef0waAg2dad_6lNtRnXT1vUsBGOF5Og&_nc_ht=scontent.fcgp7-1.fna&oh=0581104d1f21b497091cd2cc77749155&oe=618053BF"
                    alt="Second slide"
                />

                <Carousel.Caption style={color}>
                    <p>Learn Arabic using your knowledge in English.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://lh5.googleusercontent.com/proxy/PW9LFwAa11pgq8cdoay5_o4UVvbmYVjlaAuKwEvBaFGybFl4Dcz6QgM1OIYvxWnh-pUsnhfrYUl7O7kFetybpx7cHmdm6BvtJfJikEVRTcHkffjiplmpJcWGJs8WH1tdf8arRFp3svWGC2V9xiA0zfCXKs77cVoTZokl_PWaLU7t_ueg=s0-d"
                    alt="Third slide"
                />
                <Carousel.Caption style={color}>
                    <p>So you are already learning Arabic or willing to ? Perfect , This is where i am going to boost your Arabic skills</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/72/54/db/7254db649b1d107939267956ad6a2059.png"
                    alt="Third slide"
                />
                <Carousel.Caption style={color}>
                    <p>Are you thankful enough?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousels;