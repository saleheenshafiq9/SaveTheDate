
import axios from "axios";
import {useNavigate,Navigate,} from "react-router-dom";
import React,{ useContext } from "react";
import { UserContext } from "../../contexts/user-context";
const data_key='/auth/users/me';
const tokenurl="http://127.0.0.1:8000";



export const PrivateRoute = ({children}) => {
  const {currentUser,updateToken} = useContext(UserContext);
  
  const auth=currentUser?true:false;

  return(
    <>
    {auth?children:<Navigate to='/login'/>   }
    </>
  )
}