import axios from 'axios';
import { tokenUrl } from '../constants/constants';
export default function PutReq(key,data){

    const url=tokenUrl+'/'+key;
    console.log(url);
    let fetchedData=axios.put(url,data)
    console.log(fetchedData);
    
    return fetchedData

}