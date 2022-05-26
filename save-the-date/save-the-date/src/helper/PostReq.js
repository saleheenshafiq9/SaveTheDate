 import axios from 'axios';

 export default  function  PostReq(baseURL,key,data) {

  
  const fetchedData=async()=> await axios.post(baseURL+key,data,{
        headers:{
        Accept: "application/json",
          'Content-Type':'application/json;charset=UTF-8'
      }  
    }).then(res=>res.data);
   
    
    return fetchedData   
}

