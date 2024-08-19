import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = ({ data }) => {

    return (
        <div className='main'>
            <div className="color-block d-none d-lg-block"></div>
            <section className='main_profile_box'>
                <div></div>
            </section>
            <section className='details'>
                {data && (
                    <div className='ml-[5rem] max-w-[600px]'>
                        <h1 className='capitalize'>- Hello 👋 I'm </h1>
                        <h2>
                            <section className="animation">
                                <div className="first m-0"><div>{data.name.toUpperCase()}.</div></div>
                                <div className="second m-0"><div>React JS Developer</div></div>
                                <div className="third m-0"><div>Front-End Development</div></div>
                            </section>
                        </h2>
                        <p>{data.bio}</p> 
                        <button className='ml-[40px] max-md:ml-0' onClick={() => window.location.href = '/about'}>
                            MORE ABOUT ME <FontAwesomeIcon icon={faArrowRight} className='arrowicon' />
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
