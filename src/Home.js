import './style.css';
import HeroImage from './images/HeroImage.svg'
import 'animate.css'
import React from 'react'

function Home() {
  return (
      <div id='home' className='home'>
          <div  className="home-content">
              <p data-animate="animate__slideInLeft" className='observe home-content-text animate__animated '>
                  No need to worry about your YouTube channel reaching the monetizing level. you can buy from here.
              </p>
              <div data-animate="animate__zoomIn" className="observe home-content-button animate__animated">BUY NOW</div>
          </div>
          <div data-animate="animate__slideInUp" className="observe home-image animate__animated">
              <img src={HeroImage} alt="illestrated image" />
          </div>
      </div>
  )
}

export default Home