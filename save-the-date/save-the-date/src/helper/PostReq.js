 import axios from 'axios';
import { tokenUrl } from '../constants/constants';

 export default  function  PostReq(key,data,headerToken) {

  const baseURL=tokenUrl;
  const fetchedData=async()=> await axios.post(baseURL+key,data,headerToken&&{
        headers:{
          "Authorization":headerToken
       
      }  
    }).then(res=>res.data);
   
    
    return fetchedData   
}

