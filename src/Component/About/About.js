import React from 'react';
import Carousels from '../Carousel/Carousel';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <h1>Welcome To Arabites</h1>
            <h4>This site is made for students who are interested in learning Arabic and The language of Al-Quran</h4>
            <br />
            <h5>Here in Arabites, We offer some valuable arabic courses that are easy to learn and also not very expensive.</h5>
            <br />
            <div className='showcase'><Carousels></Carousels></div>

        </div>
    );
};

export default About;