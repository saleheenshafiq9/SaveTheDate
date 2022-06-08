import React, { useContext, useState } from 'react';
import CartPayment from '../../Components/cart-item/cart-payment';
import { Link } from 'react-router-dom';
import { tokenUrl } from '../../constants/constants';
import { CartContext } from '../../contexts/cart-context';
import { UserContext } from '../../contexts/user-context';
import useFetch from '../../hooks/useFetch';
import Pay from './Pay';

const Payment = () => {
  const {cartVenues, cartCaterers, cartDecorators, cartPhotos, cartItems}= useContext(CartContext);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);

  const handlePay = () => {
      setShow(true);
      setTotal(cartVenues[0]?.price + cartDecorators[0]?.price + cartPhotos[0]?.price);
  }
  // const {token}=useContext(UserContext);
  // const head=token.access;
  // console.log(head);
  // const url=`/api/partys/${party?.id}`
  
  // const {data,loading,error}=useFetch(tokenUrl,url,head);
  console.log(cartVenues[0]?.price);
  
  return (
    <div className='row m-5'>
      <div className="col-10">
      {cartItems.map(item => (
                <CartPayment key={item.id} cartItem={item} />
                ))}
      </div>
      <div className='col-2'>
        <button className='btn btn-dark m-5' onClick={handlePay}>Proceed To Payment</button>
      </div>
      <div className='mt-5'>
      <h5>Total Cost: {cartVenues[0]?.price + cartDecorators[0]?.price + cartPhotos[0]?.price}</h5>
      {show ? <Pay amount={total} /> : null}
      </div>
    </div>
  )
}

export default Payment
