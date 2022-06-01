import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext({
    carts: [],
    addToCarts: () => {}
});

export const CartsProvider = ({children}) => {
    const [carts, setCarts] = useState([]);
    const value = {carts};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}