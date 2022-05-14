import { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const tokenurl="http://127.0.0.1:8000";
const login_key='/auth/jwt/create/';
const refresh_key='/auth/jwt/refresh';

export const UserContext = createContext(
    null)
    

export const UserProvider = ({children}) => {
    const token = localStorage.getItem("stdBackend");
    const access_token = JSON.parse(token);

    const data_key='/auth/users/me';
    const access_tok = `JWT ${token.access}`;
    console.log(token);
    const fetchedData = axios.get(tokenurl+data_key, {
      headers: {
      'Authorization': access_tok,
      }
    }).then(s=>s.data)
    console.table(fetchedData);

    const navigate=useNavigate();
    const [currentUser, setCurrentUser] = useState(null);

    async function handleSubmit(e){
        const nameInput=e.target.username.value;
        const passInput=e.target.password.value;
        e.preventDefault();
        const data={"username":nameInput,"password":passInput};
        const token= await axios.post(tokenurl+login_key,data,{
          headers:{
            Accept:"application/json;",
            'Content-Type':'application/json;charset=UTF-8'
          }
        }).then(s=>s.data)
          console.log(token);
    
        if (token.refresh){
        //   setPassword('');
        //   setUser('');
          const acces_token= await axios.post(tokenurl+refresh_key,{"refresh":token.refresh},
            {
              headers:{
              Accept: "application/json",
                'Content-Type':'application/json;charset=UTF-8'
            }  
          }).then(res=>res.data)
          token.access=acces_token.access;
          localStorage.setItem("stdBackend",JSON.stringify(token));
        }
        setCurrentUser(token);
        const data_key='/auth/users/me';
        const access_tok = `JWT ${token.access}`;
        console.log(token);
        const fetchedData = await axios.get(tokenurl+data_key, {
          headers: {
          'Authorization': access_tok,
          }
        }).then(s=>s.data)
        console.table(fetchedData);
        setCurrentUser(fetchedData);
    
        //currentUser.email&& navigate('/customerProfile');
        
      }
      
    const value = { currentUser, setCurrentUser, handleSubmit};
    useEffect(() => {
        console.log(currentUser);
        currentUser.email && navigate('/customerProfile')
      
      }, [currentUser])


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}