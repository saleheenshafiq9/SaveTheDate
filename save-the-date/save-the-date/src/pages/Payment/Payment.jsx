import React, { useContext, useState } from 'react'
import { tokenUrl } from '../../constants/constants'
import { UserContext } from '../../contexts/user-context'
import useFetch from '../../hooks/useFetch'

const Payment = () => {
  const {token}=useContext(UserContext);
  const head=`JWT ${token.access}`
  const url=`/api/partys/${window.partyId}/`
  const {data,loading,error}=useFetch(tokenUrl,url,head)
  console.log(data);
  console.log(window.partyId); 
  return (
    <div className='payment'>
      <h2>{data&& data.totalCost}</h2>
    </div>
  )
}

export default Payment
