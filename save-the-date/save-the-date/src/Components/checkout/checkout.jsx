import React, {useContext} from 'react';
import { CartContext } from '../../contexts/cart-context';
import './checkout.css'

function Checkout() {
    const {cartItems} = useContext(CartContext);
    return (
    <div>
      <div>
          {cartItems.map((cartItem) => {
              const {id, title, price} = cartItem;
              return <div key={id}>
                  <h2>{title}</h2>
                  <span>{price}</span>
                </div>
          })}
      </div>
    </div>
  )
}

export default Checkout
