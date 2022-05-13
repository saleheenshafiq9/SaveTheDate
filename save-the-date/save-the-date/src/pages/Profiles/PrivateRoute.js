
import axios from "axios";
import {useNavigate,Navigate,} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
const data_key='/auth/users/me';
const tokenurl="http://127.0.0.1:8000";



export const PrivateRoute = ({children}) => {
  const {currentUser} = useContext(UserContext);
  const  access_token=JSON.parse(localStorage.getItem('stdBackend')).access;
  const navigate=useNavigate();
  const access_tok = `JWT ${access_token}`;
    const fetchedData =  axios.get(tokenurl+data_key, {
      headers: {
      'Authorization': access_tok,
      }
    }).then(s=>s.data);
  // setCurrentUser(fetchedData)
  console.log(currentUser);

    
  const auth=currentUser.email?true:false;
;
  return(
    <>
    {auth?children:<Navigate to='/login'/>   }
    </>
  )
}