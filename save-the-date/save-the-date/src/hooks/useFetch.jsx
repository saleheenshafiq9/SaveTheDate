import { useState,useEffect } from "react";
import axios from "axios";


const useFetch = (url,key,token) => {

    const [data,setData] =useState(null);
    const [loading,setLoading]=useState(false);
    const [error, setErorr]=useState(null);

    const reqHead=token?{
        headers:{
            "Authorization":`JWT ${token}`
        }
    }:null;
    
    useEffect(
        ()=>{   
            setLoading(true)
            const fetchedData=token?axios.get(url+key,reqHead):axios.get(url+key)
            
            fetchedData.then(res=>{
                setLoading(false)
                setData(res.data)
            }).catch(err=>{
                setErorr(err.message);
                setLoading(false)
            })
            
        },[]
    )
    
    return {data,error,loading}
}

export default useFetch;