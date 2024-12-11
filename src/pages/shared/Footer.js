import React from 'react';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className='py-5 text-center container'>
            <hr />
            <p>&#169; copyright {year} | abdulmomin956</p>
        </div>
    );
};

export default Footer;