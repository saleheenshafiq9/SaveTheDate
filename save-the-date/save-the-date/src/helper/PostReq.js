 import axios from 'axios';
import { tokenUrl } from '../constants/constants';

 export default  function  PostReq(key,data,headerToken) {

  const baseURL=tokenUrl;
  let thirdArg={
    headers:{
      "Authorization":headerToken
    }
  }
  const fetchedData=async()=>headerToken? await axios.post(baseURL+key,data,thirdArg): await axios.post(baseURL+key,data).then(res=>res.data);
  console.log(fetchedData);
    return fetchedData()   
}

