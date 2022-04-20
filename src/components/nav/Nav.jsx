import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiCustomerService2Line} from 'react-icons/ri'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {RiContactsBookLine} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  
  const [activeNav, setActiveNav] = useState('#')


  return (
    <nav> 
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>

      <a href="#about" onClick={()=> setActiveNav('#about')}className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>

      <a href="#experience" onClick={()=> setActiveNav('#experience')}className={activeNav === '#experience' ? 'active': ''}><BiBook/></a>

      <a href="#services" onClick={()=> setActiveNav('#services')}className={activeNav === '#services' ? 'active': ''}><RiCustomerService2Line/></a>

      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')}className={activeNav === '#portfolio' ? 'active': ''}><AiOutlineFundProjectionScreen/></a>

      <a href="#contacts" onClick={()=> setActiveNav('#contacts')}className={activeNav === '#contacts' ? 'active': ''}><RiContactsBookLine/></a>

      
    </nav>
  )
}

export default Nav