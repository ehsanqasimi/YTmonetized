import './style.css'
import React from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About';
import Pricing from './Pricing';
import Contact from './Contact';

function App() {


  React.useEffect(() => {
    let observers = document.querySelectorAll('.observe')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.animate)
        }
      })
    }, {
      rootMargin: '0px',
      threshold: .5
    })

    observers.forEach(observe => {
      observer.observe(observe)
    })
  }, [])





  return (
      <div className="App">
            <Nav />
            <Home>
            </Home>
            <About />
            <Pricing />
            <Contact />
      </div>
  );
}

export default App;
