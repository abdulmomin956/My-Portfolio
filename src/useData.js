import { useQuery } from 'react-query';

const useData = () => {


    const { data, isLoading } = useQuery('data', () => fetch('/mydata.json')
        .then(res => res.json())
    )


    return [data, isLoading]

};

export default useData;