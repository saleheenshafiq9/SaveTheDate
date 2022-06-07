import React, { useContext, useState } from 'react'
import { tokenUrl } from '../../constants/constants'
import { CartContext } from '../../contexts/cart-context'
import { UserContext } from '../../contexts/user-context'
import useFetch from '../../hooks/useFetch'

const Payment = () => {
  const {party,setParty}= useContext(CartContext);
  const {token}=useContext(UserContext);
  const head=`JWT ${token.access}`

  const url=`/api/partys/${party.id}/`

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
