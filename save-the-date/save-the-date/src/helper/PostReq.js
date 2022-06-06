 import axios from 'axios';
import { tokenUrl } from '../constants/constants';

 export default  function  PostReq(key,data) {

  const baseURL=tokenUrl;
  const fetchedData=async()=> await axios.post(baseURL+key,data,{
        headers:{

       
      }  
    }).then(res=>res.data);
   
    
    return fetchedData   
}

