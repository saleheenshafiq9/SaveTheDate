import { createContext, useState } from "react";
import React from "react";

const addCartItem = (cartItems, serviceToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === serviceToAdd.id);
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem
        );
    }

    return [...cartItems, {...serviceToAdd}];
}

export const CartContext = createContext({
    cartItems: [],
    addToCartItems: () => {},
});

export const CartsProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCartItems = (serviceToAdd) => {
        setCartItems(addCartItem(cartItems, serviceToAdd));
    }
    const value = {addToCartItems, cartItems};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}