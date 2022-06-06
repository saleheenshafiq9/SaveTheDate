import { createContext, useState } from "react";
import React from "react";

export const RecommendationContext = createContext({
    type: null,
    addType: () => {},
    date: null,
    addDate: () => {},
    city: null,
    addCity: () => {},
    area: null,
    addArea: () => {},
    count: null,
    addCount: () => {},
});

export const RecommendationsProvider = ({children}) => {
    const [type, setType] = useState([]);
    const [date, setDate] = useState([]);
    const [city, setCity] = useState([]);
    const [area, setArea] = useState([]);
    const [count, setCount] = useState([]);

    const addType = () => {
        setType(addCartItem(cartItems, serviceToAdd));
    }

    const cartVenueAdded = (venueToAdd) => {
        setcartVenues(addVenue(cartVenues, venueToAdd));
    }

    const cartCatererAdded = (catererToAdd) => {
        setcartCaterers(addCaterer(cartCaterers, catererToAdd));
    }

    const cartDecoratorAdded = (decoratorToAdd) => {
        setcartDecorators(addDecorator(cartDecorators, decoratorToAdd));
    }

    const cartPhotoAdded = (photoToAdd) => {
        setcartPhotos(addPhoto(cartPhotos, photoToAdd));
    }

    const value = {addToCartItems, cartItems, cartVenueAdded, cartVenues, cartCatererAdded, cartCaterers, cartDecoratorAdded, cartDecorators, cartPhotoAdded, cartPhotos};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}