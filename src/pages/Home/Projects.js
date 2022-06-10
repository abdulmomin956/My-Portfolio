import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Projects = () => {
    const [data, setData] = useState([])
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
            <h3 className='text-center'>My Work &#38; Projects</h3>
            <div className='row container gap-5'>
                {
                    data.map(item =>
                        <Card key={item.id} style={{ height: '20rem' }} className="bg-dark text-white overflow-hidden card-image col-md-6 mx-auto p-0 w-100">
                            <Card.Img src={item.image} alt="Card image" />
                            <Card.ImgOverlay className='text-white card-body ' style={{ backgroudColor: 'red' }}>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;