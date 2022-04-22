import React from 'react'
import './portfolio.css'

// Image
import PortfolioImage from '../../assets/portfolio-img.PNG'
import TodolistImage from '../../assets/todolist-img.PNG'

const data = [
  {
    id: 1,
    image: PortfolioImage,
    title:'Personal Portfolio',
    github: 'https://github.com/tantan2604?tab=repositories',
    demo: '#'
  },
  {
    id: 2,
    image: TodolistImage,
    title:'Todo List',
    github: 'https://github.com/tantan2604?tab=repositories',
    demo: '#'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__image">
                  <img src={image} alt={title} className='portfolio__item-image' />
                </div>
                <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Portfolio
