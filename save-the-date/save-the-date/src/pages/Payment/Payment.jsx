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

  if(cartVenues[0]?.price!=null) {
    var carV = cartVenues[0]?.price;
  }

  else {
    carV = 0;
  }

  if(cartDecorators[0]?.price!=null) {
    var carD = cartDecorators[0]?.price;
  }

  else {
    carD = 0;
  }
  
  if(cartPhotos[0]?.price!=null) {
    var carP = cartPhotos[0]?.price;
  }

  else {
    carP = 0;
  }

  console.log(carV);
  return (
    <>
    <div className='row m-5'>
      <div className="col-8">
      {cartItems.map(item => (
                <CartPayment key={item.id} cartItem={item} />
                ))}
      </div>
      <div className='col-4'>
        <button className='btn btn-dark m-5' onClick={handlePay}>Proceed To Payment</button>
        <div className='mt-5'>
      <h5>Total Cost: {carV + carD + carP}</h5>
      {show ? <Pay amount={total} /> : null}
      </div>
      </div>
    </div>
    </>
  )
}

export default Payment
