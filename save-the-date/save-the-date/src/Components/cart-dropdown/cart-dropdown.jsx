import "./cart-dropdown.css";
import CartItem from "../cart-item/cart-item";
import React from 'react'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
          {[].map(item => <CartItem cartItem={item} />)}
      </div>
      <button className="btn btn-dark">Go to Checkout</button>
    </div>
  )
}

export default CartDropdown;
