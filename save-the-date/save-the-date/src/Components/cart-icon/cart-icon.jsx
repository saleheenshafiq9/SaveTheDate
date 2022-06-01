import "./cart-icon.css";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import React from 'react'

const CartIcon = () => {
  return (
    <div className="cart-icon-container mb-5">
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon
