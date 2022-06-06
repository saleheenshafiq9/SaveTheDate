
import axios from 'axios';
function ReqWithHead(baseURL,key,accessToken) {
  return (axios.get(baseURL+key,accessToken&& {
        headers: {
        'Authorization': accessToken,
        }
      }).then(s=>s.data)
  )
}

export default ReqWithHead
    