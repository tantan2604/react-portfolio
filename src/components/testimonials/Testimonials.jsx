import React from 'react'
import './testimonials.css'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// image
import Avatar from '../../assets/girlavatar.jpg'

const data = [
  {
    avatar: Avatar,
    name:'Athena Gajasan',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda non natus commodi fuga dicta, ipsam delectus dolorum labore expedita sint cumque? Laborum minima dolore debitis ex officiis tempora dolorum eveniet!'
  },
  {
    avatar: Avatar,
    name:'Joanne',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda non natus commodi fuga dicta, ipsam delectus dolorum labore expedita sint cumque? Laborum minima dolore debitis ex officiis tempora dolorum eveniet!'
  },
  {
    avatar: Avatar,
    name:'Alona',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda non natus commodi fuga dicta, ipsam delectus dolorum labore expedita sint cumque? Laborum minima dolore debitis ex officiis tempora dolorum eveniet!'
  },
  {
    avatar: Avatar,
    name:'Jessable',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda non natus commodi fuga dicta, ipsam delectus dolorum labore expedita sint cumque? Laborum minima dolore debitis ex officiis tempora dolorum eveniet!'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => (swiper)}
      onSlideChange={() => ('slide change')}
      
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(

              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
              </SwiperSlide>

            )
          } )
        }
        
      </Swiper>
    </section>

  )
}

export default Testimonials