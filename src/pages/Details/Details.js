import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ data, text }) => {
    const { id } = useParams();


    const singleItem = data.filter(item => item.id === parseInt(id))
    console.log(singleItem);



    return (
        <div>
            {id}

        </div>
    );
};

export default Details;