import React, { useContext, useState } from 'react'
import { tokenUrl } from '../../constants/constants'
import { UserContext } from '../../contexts/user-context'
import useFetch from '../../hooks/useFetch'

const Payment = () => {
  const {token}=useContext(UserContext);
  const head=`JWT ${token.access}`
  const url=`/api/partys/${partyId}/`
  const {data,loading,error}=useFetch(tokenUrl,url,head)
  console.log(data);
  return (
    <div>
      {data&& data.totalCost}
    </div>
  )
}

export default Payment
