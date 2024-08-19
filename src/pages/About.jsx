import { faBriefcase, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const About = ({ main, resume }) => {
  const name = main?.name;
  const last = main?.last;
  const phone = main?.phone;
  const email = main?.email;
  const occupation = main?.occupation;
  const age = main?.age;
  const Freelance = main?.Freelance?.Available;
  const Address = main?.address?.state;
  const Langages = main?.Langages;
  const hobbies = main?.hobbies;

  const skills = resume?.skills || [];
  const works = resume?.work || [];

  return (
    <>
      <div className='about_page'>
        <div className='head_text'>
          <h1>About<span>Me</span></h1>
          <span className='title_background'>Resume</span>
        </div>
        <section className='content'>
          <div className="contener">

            <article className='personal_info'>
              <section className='infos'>
                <h4>personal info</h4>
                <div>
                  <ul className='row'>
                    <li> <span className='title'>First Name :</span> <span className='title_value'> {name} </span></li>
                    <li> <span className='title'>Last Name :</span> <span className='title_value'> {last} </span></li>
                    <li> <span className='title'>Age:</span> <span className='title_value'> {age} </span></li>
                    <li> <span className='title'>Profession :</span> <span className='title_value'> {occupation} </span></li>
                    <li> <span className='title'>Freelance :</span> <span className='title_value'> {Freelance} </span></li>
                    <li> <span className='title'>Address :</span> <span className='title_value'> {Address} </span></li>
                    <li> <span className='title'>Phone :</span> <span className='title_value'> {phone} </span></li>
                    <li> <span className='title'>Email :</span> <span className='title_value'> {email} </span></li>
                    <li> <span className='title'>Langages :</span> <span className='title_value'> {Langages} </span></li>
                    <li> <span className='title'>hobbies :</span> <span className='title_value'> {hobbies} </span></li>
                  </ul>
                </div>
                <button>MORE ABOUT ME <FontAwesomeIcon icon={faDownload} className='arrowicon' /></button>
              </section>

              <hr className="separator" />

              <section className='infos'>
                <ul>
                  <li className='info_details'>
                    <div className='info_year'>
                      <h2>12</h2>
                      <p className='info_text'> years of <span>experience</span></p>
                    </div>
                  </li>
                  <li className='info_details'>
                    <div className='info_year'>
                      <h2>91</h2>
                      <p className='info_text'> years of <span>experience</span></p>
                    </div>
                  </li>
                  <li className='info_details'>
                    <div className='info_year'>
                      <h2>78</h2>
                      <p className='info_text'> years of <span>experience</span></p>
                    </div>
                  </li>
                  <li className='info_details'>
                    <div className='info_year'>
                      <h2>55</h2>
                      <p className='info_text'> years of <span>experience</span></p>
                    </div>
                  </li>
                </ul>
              </section>
            </article>

            <hr className="separator" />

            <article className='my_skils'>
              <h4>My Skils</h4>
              <section>
                {skills.length > 0 ? (
                  skills.map((sk, index) => (
                    <>
                      <div key={index} >
                        <CircularProgressbar
                          value={sk.level}
                          text={`${sk.level}%`}
                          strokeWidth={5}
                        />
                        <h3 className='skill-name'>{sk.name}</h3>
                      </div>
                    </>
                  ))
                ) : (
                  <div>No skills available</div>
                )}
              </section>
            </article>

            <hr className="separator" />

            <article className='my_skils'>
              <h4>Experience <span>&</span> Education</h4>
              <section className='resume_box'>
                <ul>
                  {works.map((rk, index) => (
                    <li key={index}>
                      <div className="icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </div>
                      <div className='icon_details'>
                        <span className='text-[12px]'>{rk.years}</span>
                        <span className='text-[18px] mt-[5px] text-[#ffb400]'>{rk.company}</span>
                        <h5>{rk.title}<span>-</span>Envato</h5>
                        <p>{rk.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
