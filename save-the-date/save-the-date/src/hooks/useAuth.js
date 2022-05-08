import { useState,useEffect } from "react";


const useAuth = () => {

    const [auth,setAuth] =useState(localStorage.getItem("stdBackend")?JSON.parse(localStorage.getItem("stdBackend")):null)
    
    useEffect(()=>
    setAuth(localStorage.getItem("stdBackend")?JSON.parse(localStorage.getItem("stdBackend")):null),[])
    return auth;
    
}

export default useAuth;