import React from 'react'
import './contacts.css'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'

// icons
import  { HiOutlineMail } from 'react-icons/hi'
import  { RiMessengerLine } from 'react-icons/ri'
import  { BsDiscord } from 'react-icons/bs'

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uqbzp64', 'template_fqn0e27', form.current, 'qSgFvocmeT1bGE7jC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };



  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jonathan.gajasan19@gmail.com</h5>
            <a href="mailto:jonathan.gajasan19@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Jonathan Gajasan</h5>
            <a href="https://m.me/tantan00442266" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsDiscord className='contact__option-icon'/>
            <h4>Dicord</h4>
            <h5>dusky#1826</h5>
            <a href="https://discord.com/" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message"   rows="7" placeholder='Message Here!' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts