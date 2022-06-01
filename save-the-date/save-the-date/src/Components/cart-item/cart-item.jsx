import React from 'react'
import "./cart-item.css";

const CartItem = ({cartItem}) => {
    const { title, images, price } = cartItem;
  return (
    <div className='cart-item-container'>
        <img src={images[0].image} alt={`${title}`} id="cartimg"/>
        <div className="item-details">
            <span className='name'>{title}</span>
            <span className='name'>{price}</span>
        </div>
    </div>
  )
}

export default CartItem;
