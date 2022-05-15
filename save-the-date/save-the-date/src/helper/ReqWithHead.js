
import axios from 'axios';
function ReqWithHead(baseURL,key,accessToken) {
  return (axios.get(baseURL+key, {
        headers: {
        'Authorization': accessToken,
        }
      }).then(s=>s.data)
  )
}

export default ReqWithHead
    