import {useEffect,useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data,setData] = useState({})
    useEffect (() => {
        axios.get(url).then(res => {
            setData(res)
            console.log(res.data)
        },error => {
            console.log(error.message);
            console.log('Unable to fetch data')
        })
        
    },[url])
    return [data]
}
 
export default useFetch;