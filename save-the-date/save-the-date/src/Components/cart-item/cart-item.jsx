import React from 'react'
import "./cart-item.css";

const CartItem = ({cartItem}) => {
    const { name, image, price } = cartItem;
  return (
    <div className='cart-item-container'>
        <img src={image} alt={`${name}`} id="cartimg"/>
        <div className="item-details">
            <span className='name'>{name}</span>
            <span className='name'>{price}</span>
        </div>
    </div>
  )
}

export default CartItem;
