import axios from "axios";
import { createContext, useState,useEffect,useCallback } from "react";
import { useNavigate } from "react-router";
import ReqWithHead from "../helper/ReqWithHead";
const refresh_key='/auth/jwt/refresh';
const data_key='/auth/users/me';
const tokenurl="http://127.0.0.1:8000";

export const UserContext = createContext(
    null)

export const UserProvider = ({children}) => {
    const navigate=useNavigate();
    let storageToken=localStorage.getItem('stdBackend')?JSON.parse(localStorage.getItem("stdBackend")):null;
    const [token, setToken] = useState(storageToken);
    const [loading,setLoading]=useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const updateToken=useCallback(async()=>{
        const accessToken=axios.post(tokenurl+refresh_key,{'refresh':token?.refresh})
        .then(res=>res.data)
        .then((resp)=>{
            setToken(tok=>({...tok,'access':resp.access}))
        return resp});
        const access_tok = `JWT ${token?.access}`;
        console.log(token);   
        const fetchedData=await ReqWithHead(tokenurl,data_key,access_tok)
        .then(resp=>{
                setCurrentUser(resp);
                return resp
        })
        loading&& setLoading(false);
            
        fetchedData&& navigate('/customerProfile');
    },[token,loading,navigate])
    useEffect(()=>{
        if(loading){
            updateToken();
        }


    },[token,loading,updateToken])
    
   
 

//    token&&login();
   
   
    const value = { currentUser,setCurrentUser,updateToken,token};
    


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}