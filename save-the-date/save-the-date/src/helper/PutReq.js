import axios from 'axios';
import { tokenUrl } from '../constants/constants';
export default function PutReq(key,data,accessToken){

    const url=tokenUrl+'/'+key;
    console.log(url);
    let fetchedData=axios.put(url,data,{
        headers: {
            'Authorization': accessToken,
            }})
    console.log(fetchedData);
    
    return fetchedData

}