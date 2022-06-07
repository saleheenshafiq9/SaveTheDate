import React, { useContext, useState } from 'react';
import { tokenUrl } from '../../constants/constants';
import { CartContext } from '../../contexts/cart-context';
import { UserContext } from '../../contexts/user-context';
import useFetch from '../../hooks/useFetch';

const Payment = () => {
  const {party,setParty}= useContext(CartContext);

  
  return (
    <div>
      {party.totalCost}

    </div>
  )
}

export default Payment
