import axios from 'axios';
import { tokenUrl } from '../constants/constants';
function GetReq(key,baseURL=tokenUrl) {
  return (axios.get(baseURL+key).then(s=>s.data));
}

export default GetReq;
    