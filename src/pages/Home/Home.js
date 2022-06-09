import React from 'react';
import { Button } from 'react-bootstrap';
import photo from '../../images/for portfolio.png'
import ContactMe from './ContactMe';
import Projects from './Projects';

const Home = () => {
    // document.title = 'HOME - Abdul'
    return (
        <main>
            <div className='border '>
                <div className='container d-flex flex-md-row flex-column justify-content-between align-items-end align-items-md-center  min-vh-100'>
                    <div>
                        <h1>Here I'm Abdul Momin</h1>
                        <p>Obviously I'm a Web Developer with over 1 years of experience. Experienced with all stages of the development

                        </p>
                        <Button variant="outline-primary" >Download Resume</Button>
                    </div>
                    <div className=' h-100 mt-auto'>
                        <img width='100%' src={photo} alt="" />
                    </div>
                </div>
            </div>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </main>
    );
};

export default Home;