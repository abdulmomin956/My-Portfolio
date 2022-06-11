import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('mydata.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setData(data)
            })
    }, [])
    return [data]
};

export default useData;