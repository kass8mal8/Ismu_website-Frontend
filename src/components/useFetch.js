import {useEffect,useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data,setData] = useState({})
    useEffect (() => {
        axios.get(res => {
            setData(res)
            console.log(res);
        })
        
    },[url])
    return [data]
}
 
export default useFetch;