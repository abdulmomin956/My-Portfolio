import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ data, text }) => {
    const { id } = useParams();


    const singleItemArr = data.filter(item => item.id === parseInt(id))
    const singleItem = singleItemArr[0]
    // console.log(singleItem);

    document.title = singleItem.name + ' - Abdul'
    return (
        <section className='bg-light py-5'>
            <div className="container d-flex gap-5 flex-column flex-lg-row">
                <div>
                    <div className='border mb-3 p-4 bg-white'>
                        <h1>Project Name: {singleItem.name}</h1>
                        <hr />
                        <p>{singleItem.feature}</p>
                    </div>
                    <div className='border p-4 bg-white'>
                        <h1>Project Info:</h1>
                        <hr />
                        <table>
                            <tr>
                                <td>Category:</td>
                                <td>{singleItem.type}</td>
                            </tr>
                            <tr>
                                <td>Technology:</td>
                                <td>{singleItem.tech}</td>
                            </tr>
                            <tr>
                                <td>Website:</td>
                                <td>{singleItem.live}</td>
                            </tr>
                            <tr>
                                <td>Client Code:</td>
                                <td> <a href={singleItem.client}>Github</a> </td>
                            </tr>
                            {
                                singleItem.server && <tr>
                                    <td>Server Code: </td>
                                    <td> <a href={singleItem.server}>Github</a></td>
                                </tr>
                            }
                            <tr>
                                <td>Date:</td>
                                <td>{singleItem.date}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='border w-100'>
                    <img className='mx-auto d-block' style={{ width: "80%" }} src={singleItem.image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Details;