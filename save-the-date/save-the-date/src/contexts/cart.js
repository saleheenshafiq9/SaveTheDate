import { createContext, useState } from "react";
import VenueData from "../data/VenueData";
import CatererData from "../data/CatererData";
import DecoratorData from "../data/DecoratorData";
import PhotographyData from "../data/PhotographyData";

export const CartContext = createContext({
    carts: [],
});

export const CartsProvider = ({children}) => {
    const [carts, setCarts] = useState(VenueData);
    const value = {carts};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}