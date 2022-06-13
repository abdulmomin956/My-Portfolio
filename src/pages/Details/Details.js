import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ data, text }) => {
    const { id } = useParams();


    const singleItemArr = data.filter(item => item.id === parseInt(id))
    const singleItem = singleItemArr[0]
    console.log(singleItem);


    return (
        <section className='container'>
            <div className='border my-3'>
                <h1>Project Name: {singleItem.name}</h1>
                <hr />
                <p>{singleItem.feature}</p>
            </div>
            <div className='border'>
                <h1>Project Info:</h1>
                <hr />
                <table>
                    <tr>
                        <td>Category:</td>
                        <td>{singleItem.type}</td>
                    </tr>
                    <tr>
                        <td>Date:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Website:</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </section>
    );
};

export default Details;