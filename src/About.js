import React from 'react'
import AboutImage from './images/AboutImage.svg'
import 'animate.css'

function About() {
    return (
        <div id='about' className='about'>
            <div data-animate="animate__slideInRight" className="observe about-image animate__animated">
                <img className='aboutImage' src={AboutImage} alt="illestrated image" />
            </div>
            <div className="about-content">
                <p data-animate="animate__slideInLeft" className="about-content-text observe animate__animated">
                    we are a group of
                    people that provides
                    monetized channels
                    for you to make money
                    on YouTube as soon
                    as possible.
                </p>
                <div data-animate="animate__zoomIn" className="about-content-button animate__animated observe">
                    <a href="#contact">
                        CONTACT NOW
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About