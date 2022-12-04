import 'animate.css'
import React from 'react'

function Pricing() {
    return (
        <div id='pricing' className='pricing'>
            <div data-animate="animate__slideInRight" className="observe animate__animated pricing-text">
                Only <span>300RM</span> for one channle (^o^)
            </div>
            <div data-animate="animate__zoomIn" className="observe animate__animated pricing-button">
               <a href="#buy">BUY NOW</a> 
            </div>
        </div>
    )
}

export default Pricing