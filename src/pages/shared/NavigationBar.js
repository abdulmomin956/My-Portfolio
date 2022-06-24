import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const NavigationBar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (

        <Navbar style={{ zIndex: 50 }} className={colorChange ? 'bg-white shadow' : 'bg-transparent shadow-none'} sticky="top" collapseOnSelect expand="lg"  >
            <Container>
                <Navbar.Brand as={Link} className='fw-bold' to='/'>Abdul</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <CustomLink to='/'>HOME</CustomLink>
                        <CustomLink to='/projects'>PROJECTS</CustomLink>
                        <CustomLink to='/blog'>BLOG</CustomLink>
                        <CustomLink to='/about'>ABOUT ME</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;