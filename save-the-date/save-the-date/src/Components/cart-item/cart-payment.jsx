import React from 'react'

const CartPayment = ({cartItem}) => {
    const { title, images, price } = cartItem;
    const totalPrice = 0;


  return (
    <div className='cart-item-container text-center m-5 p-5'>
        <img src={images[0].image} alt={`${title}`} id="payimg"/>
        <div className='item-details'>
            <span className='name'><b>{`${title.substring(0, 25)}`}</b></span>
            <span className='name'><b>{price}</b></span>
        </div>
    </div>
  )
}

export default CartPayment
