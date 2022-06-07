import React, { useContext, useState } from 'react';
import { tokenUrl } from '../../constants/constants';
import { CartContext } from '../../contexts/cart-context';
import { UserContext } from '../../contexts/user-context';
import useFetch from '../../hooks/useFetch';

const Payment = () => {
  const {party,setParty}= useContext(CartContext);
  const {token}=useContext(UserContext);
  const head=token.access;
  console.log(head);
  const url=`/api/partys/${party?.id}`
  
  const {data,loading,error}=useFetch(tokenUrl,url,head)
  
  
  return (
    <div>
      {data?.totalCost}

    </div>
  )
}

export default Payment
