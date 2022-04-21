import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

/*Icon */
import {BsCodeSquare} from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'
import {GoFileSubmodule} from 'react-icons/go'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container" >
        <div className="about__me">
          <img src={ME} alt="Mypicture" className='about__me-image'/>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsCodeSquare className='about__icon'/>
              <h5>Skills</h5>
              <a href="#" className='btn btn-primary'>Click Here</a>
            </article>

            <article className='about__card'>
              <GoFileSubmodule className='about__icon'/>
              <h5>Project</h5>
              <a href="#" className='btn btn-primary'>Click Here</a>
            </article>

            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>Education</h5>
              <a href="#" className='btn btn-primary'>Click Here</a>
            </article>
            
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus necessitatibus pariatur tempore illum, odit officiis. Veritatis modi minus quidem cum deserunt voluptatibus delectus fuga unde sit, ea sunt, blanditiis quo.</p>
            <a href="#contact" className='btn btn-primary'>Lets Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About