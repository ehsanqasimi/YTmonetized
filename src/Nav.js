import './style.css';
import Logo from '../src/images/monitizedLogo.svg';
import React, { useRef, useState } from 'react'
import 'animate.css'

function Nav() {    

    const [isOpen, setIsOpen] = useState(false)
    const nav = useRef()

    function navToggle() {
        setIsOpen(!isOpen)
    }

    React.useEffect(() => {
        isOpen?document.body.style.overflow = 'hidden':document.body.style.overflow = 'auto'
    }, [isOpen])


    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 650) {
                console.log('done')
                nav.current.style.background = '#252525'
            } else {
                nav.current.style.background = 'linear-gradient(to right, #3AAEBB, #6E36C5)'
            }
        })
    },[])


    function close() {
        setIsOpen(false)
    }
    return (
        <nav ref={nav} className={`nav 
            ${isOpen === true ? 'show' : ''}
        `}>

            <img src={Logo} alt="image" className="logo animate__animated animate__slideInLeft" />
            <ul className='animate__animated animate__slideInRight'>
                <li onClick={close}><a href="#home">Home</a></li>
                <li onClick={close}><a href="#about">About</a></li>
                <li onClick={close}><a href="#pricing">Pricing</a></li>
                <li onClick={close}><a href="#contact">Contact</a></li>
                <li onClick={close} className='buy'><a href="#buy">Buy</a></li>
            </ul>
            <span onClick={navToggle} className="menu material-icons">
                {
                    isOpen === true ? 'close' : 'menu' 
                }
            </span>
            
        </nav>
    )
}

export default Nav