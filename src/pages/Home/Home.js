import React from 'react';
import photo from '../../images/for portfolio.png'
import ContactMe from './ContactMe';
import Projects from './Projects';
import pdf from '../../images/Abdul_Momin_Resume.pdf'
import './Home.css'

const Home = ({ data }) => {
    document.title = 'HOME - Abdul'
    return (
        <main>
            <div className='border banner' style={{ marginTop: '-3.5rem' }}>
                <div className='container d-flex flex-md-row flex-column justify-content-between align-items-end align-items-md-center  min-vh-100'>
                    <div className='py-5'>
                        <h1>Here I'm Abdul Momin</h1>
                        <p>Obviously I'm a Web Developer with over 1 years of experience. Experienced with all stages of the development

                        </p>
                        <a href={pdf} target='_blank' rel='noopener noreferrer' className='btn btn-outline-primary' >Download Resume</a>
                    </div>
                    <div className=' h-100 mt-auto'>
                        <img width='100%' src={photo} alt="" />
                    </div>
                </div>
            </div>
            <Projects data={data}></Projects>
            <ContactMe></ContactMe>
        </main>
    );
};

export default Home;