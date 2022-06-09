import React from 'react';
import { Link } from 'react-router-dom';
import deadIcon from '../../images/dead-svgrepo-com.svg'

const NotFound = () => {
    return (
        <div className='w-25 mx-auto text-center'>
            <img className='w-50' src={deadIcon} alt="" />
            <h1>404</h1>
            <p>This page is missing</p>
            <Link className='btn btn-primary' to='/'>GO HOME</Link>
        </div>
    );
};

export default NotFound;