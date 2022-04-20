import React from 'react'
import './header.css'
import CTA from './CTA'
import TAN from '../../assets/tan.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jonathan Gajasan</h1>
        <h5 className="text-light">WebDev</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="tan">
          <img src={TAN} alt="Tan" />
        </div>
        
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header