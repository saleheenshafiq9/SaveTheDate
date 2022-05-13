 import axios from 'axios'

 export default async function  PostReq(baseURL,key,data) {


   const token= await axios.post(baseURL+key,data,{
        headers:{
        Accept: "application/json",
          'Content-Type':'application/json;charset=UTF-8'
      }  
    }).then(res=>res.data);
    console.log(token);
    return token;    
}

