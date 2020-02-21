import axios from 'axios';
import {useState, useEffect} from 'react';


export const useHttp = (url, dependencies) => {

    const [isLoading, setLoading] = useState(false);

    const [data, setData] = useState([]);

    useEffect((url)=>{
    setLoading(true);
    axios.get(url)
    .then(res => {
        setLoading(false);
        setData(res.data);})
        .catch(err => {
            alert('Oops! Something went wrong. ' + err);
            console.log(err);
            setLoading(false);
            }
        ) }, dependencies);

    return [isLoading, data];

}