import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = ({ data }) => {

  const social = data?.social || [];

  return (
    <>
      <div className='about_page'>
        <div className='head_text'>
          <h1>get<span>in touch</span></h1>
          <span className='title_background'>contact</span>
        </div>
        <section className='contect_page'>
          <div className="content">

            <section className='contact_details'>
              <h4>DON'T BE SHY!</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, itaque. Accusamus quis officia dolores nisi in. Ex soluta reiciendis, odio optio architecto.</p>
              <ul className='mt-[10px]'>
                <li>
                  <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <p>ADDRESS POINT</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, magni.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <p>EMAIL</p>
                    <p>manthan255@email.com</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <p>CALL ME</p>
                    <p>+91 8105068268</p>
                  </div>
                </li>
              </ul>

              <div className='sosocial-media'>
                {social.map((so, index) => (
                  <div className="icon" key={index}>
                    {/* <p>{so.className}</p> */}
                    <FontAwesomeIcon icon={so.name === "twitter" ? faTwitter : so.name === "facebook" ? faFacebookF : so.name === "linkedin" ? faLinkedinIn : so.name === "instagram" ? faInstagram : faGithub} />
                  </div>
                ))}

              </div>
            </section>

            <section className='contact_form'>
              <form action="" onSubmit={``}>
                <div>
                  <label htmlFor="firstname">
                    First Name:
                    <input type="text" id="firstname" placeholder="ENTER YOUR FIRST NAME" required />
                  </label>
                  <label htmlFor="email">
                    Email:
                    <input type="email" id="email" placeholder="ENTER YOUR EMAIL" required />
                  </label>
                </div>
                <label htmlFor="subject">
                  Subject:
                  <input type="text" id="subject" placeholder="ENTER SUBJECT" required />
                </label>
                <label htmlFor="message">
                  Message:
                  <textarea id="message" placeholder="ENTER YOUR MESSAGE" required></textarea>
                </label>
                <button type="submit" className='submit'>Submit <FontAwesomeIcon icon={faPaperPlane} className='arrowicon' /></button>
              </form>

            </section>

          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
