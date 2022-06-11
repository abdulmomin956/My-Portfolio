import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    document.title = 'PROJECTS - Abdul'
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetch('mydata.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])
    return (
        <div className='py-5 bg-light'>
            <h3 className='text-center'>All of My Work &#38; Projects</h3>
            <div className='container '>
                <div className="row">
                    {
                        data.map(item =>
                            <div key={item.id} className=' col-md-6 col-lg-4 mb-4'>
                                <div style={{ height: '20rem' }} className="bg-dark text-white overflow-hidden card-image   p-0 card border-0 col-12 col-md-12 col-lg-12">
                                    <img className='card-img' src={item.image} alt="" />
                                    <div className='text-white card-body card-img-overlay' >
                                        <h5 className='card-title'>{item.name}</h5>
                                        <p className='card-text'>{item.type}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;