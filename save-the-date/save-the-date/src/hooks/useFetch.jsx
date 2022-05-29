import { useState,useEffect } from "react";
import axios from "axios";


const useFetch = (url,key,pending) => {

    const [data,setData] =useState(null);
    const [loading,setLoading]=useState(pending);
    const [error, setErorr]=useState(null);


    
    useEffect(
        ()=>{  

            loading && axios.get(url+key).then(res=>setData(res.data))
            loading && setLoading(false)
            
        },[loading]
    )
    
    return {data,error,loading}
}

export default useAuth;