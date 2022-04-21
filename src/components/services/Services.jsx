import React from 'react'
import './services.css'

/*Icons*/
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container service__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Dev */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Design */}

        <article className='service'>
          <div className="service__head">
            <h3>Video Editing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, quaerat.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
    
  )
}

export default Services