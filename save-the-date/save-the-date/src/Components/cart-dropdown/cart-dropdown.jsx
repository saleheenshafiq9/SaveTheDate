import { useContext } from "react";
import { useNavigate } from "react-router";

import { CartContext } from "../../contexts/cart-context";

import "./cart-dropdown.css";
import CartItem from "../cart-item/cart-item";
import React from 'react'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
          {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
          ))}
      </div>
      <button className="btn btn-dark" onClick={goToCheckoutHandler}>Go to Checkout</button>
    </div>
  )
}

export default CartDropdown;
