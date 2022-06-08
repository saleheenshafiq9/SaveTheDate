import React, { useContext, useState } from 'react';
import CartPayment from '../../Components/cart-item/cart-payment';
import { tokenUrl } from '../../constants/constants';
import { CartContext } from '../../contexts/cart-context';
import { UserContext } from '../../contexts/user-context';
import useFetch from '../../hooks/useFetch';

const Payment = () => {
  const {party,setParty,cartItems}= useContext(CartContext);
  const {token}=useContext(UserContext);
  const head=token.access;
  console.log(head);
  const url=`/api/partys/${party?.id}`
  
  const {data,loading,error}=useFetch(tokenUrl,url,head);
  
  return (
    <div className='row m-5'>
      <div className="col-10">
      {cartItems.map(item => (
                <CartPayment key={item.id} cartItem={item} />
                ))}
        <h5>Total cost:</h5>
      </div>
      <div className='col-2'>
        <button className='btn btn-dark'>Proceed To Payment</button>
      </div>
    </div>
  )
}

export default Payment
