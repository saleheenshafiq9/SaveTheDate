
import axios from 'axios';
import { tokenUrl } from '../constants/constants';
function ReqWithHead(key,accessToken) {
  const baseURL=tokenUrl;
  return (axios.get(baseURL+key,accessToken&& {
        headers: {
        'Authorization': accessToken,
        }
      }).then(s=>s.data)
  )
}

export default ReqWithHead
    