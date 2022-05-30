import axios from "axios";
import React from "react";
import { createContext, useState,useEffect,useCallback } from "react";
import { useNavigate } from "react-router";
import ReqWithHead from "../helper/ReqWithHead";
import getToken from "../helper/getToken";
import setltoken from "../helper/setToken";
import {refresh_key,data_key,tokenUrl} from "../constants/constants.js"

export const UserContext = createContext(
    null)

export const UserProvider = ({children}) => {
    const navigate=useNavigate();
    let storageToken=localStorage.getItem('stdBackend')?getToken("stdBackend"):null;
    
    const [token, setToken] = useState(storageToken);
    const [loading,setLoading]=useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn,setLoggedIn]= useState(false)

    const updateToken=useCallback(async()=>{
        console.log(getToken("stdBackend"));
        let stToken=getToken('stdBackend');
        stToken&& setToken(getToken("stdBackend"));
        axios.post(tokenUrl+refresh_key,{'refresh':token?.refresh})
        .then(res=>res.data)
        .then((resp)=>{
            setToken(tok=>({...tok,'access':resp.access}))
            setltoken('stdBackend',token)
        return resp});
        const access_tok = `JWT ${token?.access}`;
        console.log(token);   
        const fetchedData=await ReqWithHead(tokenUrl,data_key,access_tok)
        .then(resp=>{
                setCurrentUser(resp);
                return resp
        })
        loading&& setLoading(false);
        
    },[token,navigate,loading])

    const NavigateToProfile=()=>{
        currentUser?.userType=="customer" && navigate('../customerProfile')
        currentUser?.userType=="venue" &&  navigate('../venueProfile')
        currentUser?.userType=="catering" &&  navigate('../catererProfile')
        currentUser?.userType=="photographer" &&  navigate('../photographyProfile')

    }
    
    useEffect(()=>{
       currentUser && setLoggedIn(true)
       !currentUser && setLoggedIn(false)
    },[currentUser])

    useEffect(()=>{
        !loggedIn && token && updateToken()
    },[token,loading])

    useEffect(()=>{
        loggedIn&&  NavigateToProfile();

            
    },[currentUser,loggedIn])

    const value = { currentUser,token,setCurrentUser,updateToken,setToken,setLoading};
    

    return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    )
    
}