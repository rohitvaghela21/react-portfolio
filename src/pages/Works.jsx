import React from 'react'

const Works = ({ data }) => {

    const myprojects = data?.myworks || [];

    return (
        <>
            <div className='about_page'>
                <div className='head_text'>
                    <h1>My<span>Portfolio</span></h1>
                    <span className='title_background'>Works</span>
                </div>
                <section className='content'>
                    <div className="contener">
                        <section className='contener_collection'>
                            {myprojects.map((pro, index) => (
                                <div key={index} className='project_box'>
                                    <section>
                                        <div className='absolute'>
                                            <h4 className='m-[10px] bg-[#201d1d3f] px-[20px] py-[5px] border-solid border-4 border-white animate-slideIn'>
                                                20
                                            </h4>
                                        </div>
                                        <div className='w-[380px] max-md:w-auto'>
                                            <img src={pro.image} alt="loading..." />
                                        </div>
                                    </section>
                                    <section className='project_box_text animate-fadeIn'>
                                        <h2 className='text-[1.5rem] mb-[10px] max-md:text-[1rem]'> {pro.name}</h2>
                                        <p>{pro.description}</p>
                                    </section>
                                </div>
                            ))}
                        </section>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Works
