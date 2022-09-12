import React from 'react'

import { typography } from '../styles/style'

const Form = () => {
  return (
    <form action="https://formspree.io/f/mgepnbjb" method="POST" id="contactForm" className="bg-white rounded-2xl p-6 shadow-form space-y-6 ss:max-w-[540px]" data-aos="fade-left" data-aos-duration="1000">
                    <h3 className={`${typography.heading3}`}>Send me a message!</h3>

                    <div className="form__control form__control--name">
                        <input type="text" name="name" id="name" className=' py-2 px-3 bg-slate-100 rounded-lg w-full focus:border-primary focus:outline-primary' placeholder="Name" required />
                    </div>

                    <div className="form__control form__control--email">
                        <input type="email" name="email" id="email" className=' py-2 px-3 bg-slate-100 rounded-lg w-full focus:border-primary focus:outline-primary' placeholder="Email" required />
                    </div>

                    <div className="form__control form__control--subject">
                        <input type="text" name="subject" id="subject" className=' py-2 px-3 bg-slate-100 rounded-lg w-full focus:border-primary focus:outline-primary' placeholder="Subject" required />
                    </div>

                    <div className="form__control form__control--text">
                        <textarea name="message" id="textarea" className=' py-2 px-3 bg-slate-100 rounded-lg w-full focus:border-primary focus:outline-primary' cols="30" rows="10" placeholder="Message" required></textarea>
                    </div>

                    <button type="submit" className="btn btn--primary btn--small" id="formBtn">SEND</button>

                    <p className="form__status text-orange" id="formStatus"></p>
                </form>
  )
}

export default Form