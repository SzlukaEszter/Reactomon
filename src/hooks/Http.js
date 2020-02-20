import axios from 'axios';
import {useState, useEffect} from 'react';


export const useHttp = (url, dependencies) => {

    const [isLoading, setLoading] = useState(false);

    const [data, setData] = useState(null);

    useEffect((url)=>{
    axios.get(url)
    .then(res => {
        setLoading(true);
        setData(res.data);})
        .catch(err => {
            alert('Oops! Something went wrong.');
            console.log(err);
            setLoading(false);
            }
        ) }, dependencies)

    return [isLoading, data];

}