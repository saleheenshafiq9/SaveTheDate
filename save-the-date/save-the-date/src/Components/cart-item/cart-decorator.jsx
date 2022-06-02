import React, { useState } from 'react'
import "./cart-item.css";

const CartDecorator = ({cartDecorator}) => {

    const { title, images, price } = cartDecorator;
    console.log(cartDecorator);
  return (
    <div className='cart-item-container'>
        <img src={images[0].image} alt={`${title}`} id="cartimg"/>
        <div className="item-details">
            <span className='name'>{`${title.substring(0, 25)}`}</span>
            <span className='name'>{price}</span>
        </div>
    </div>
  )
}

export default CartDecorator;
