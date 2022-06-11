import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useData from './useData';
import pictureIcon from '../../images/picture-icon.svg'

const Project = ({ all }) => {
    const [data] = useData()
    const [zoom, setZoom] = useState(false);
    const [zoomItem, setZoomItem] = useState('')
    const navigate = useNavigate();
    const [myArr, setMyArr] = useState([])

    const handleZoom = id => {
        setZoom(true);
        setZoomItem(id);
        console.log(id);
        const remaining = data.filter(item => item.id === id)
        console.log(remaining);
        setMyArr(remaining)


    }
    return (
        <div className='py-5 bg-light'>
            {
                zoom && myArr.map((item, i) =>
                    <div key={i} className='popup-image'>
                        <span onClick={() => setZoom(false)}>&times;</span>
                        <img className='' style={{ width: '95%' }} src={item.image} alt={item.name} />
                    </div>
                )

            }
            <h3 className='text-center'>{
                all ? 'All of My Work & Projects' : 'My Work & Projects'
            }</h3>
            <div className='container '>
                <div className="row">
                    {
                        data.map(item =>
                            <div key={item.id} className=' col-md-6 col-lg-4 mb-4'>
                                <div style={{ height: '20rem' }} className="bg-dark text-white overflow-hidden card-image   p-0 card border-0 col-12 col-md-12 col-lg-12" >
                                    <img className='card-img' src={item.image} alt="" />
                                    <div className='text-white card-body card-img-overlay d-flex flex-column justify-content-between' >
                                        <div>
                                            <h5 className='card-title'>{item.name}</h5>
                                            <p className='card-text'>{item.type}</p>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <div className='circle2 d-flex align-items-center justify-content-center'>
                                                <button style={{ background: 'rgb(189, 189, 189)' }} className='border-0' onClick={() => handleZoom(item.id)}>
                                                    <img style={{ height: '2rem', width: '2rem' }} className='text-white h-4 w-4 ' src={pictureIcon} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='btn btn-outline-light'>Live Site</button>
                                            <button className='btn btn-outline-light'>Client Code</button>
                                            <button className='btn btn-outline-light'>Server Code</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                !all && <button onClick={() => navigate('/projects')} className='mx-auto d-block btn btn-primary'>See More</button>
            }
        </div>
    );
};

export default Project;