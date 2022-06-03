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

const addVenue = (cartVenues, venueToAdd) => {
    const existingVenue = cartVenues.find(
        (cartVenue) => cartVenue.id === venueToAdd.id);
    if(existingVenue) {
        return cartVenues.map((cartVenue) => cartVenue
        );
    }
    
    return [...cartVenues, {...venueToAdd}];
}

const addCaterer = (cartCaterers, catererToAdd) => {
    const existingCaterer = cartCaterers.find(
        (cartCaterer) => cartCaterer.id === catererToAdd.id);
    if(existingCaterer) {
        return cartCaterers.map((cartCaterer) => cartCaterer
        );
    }
    
    return [...cartCaterers, {...catererToAdd}];
}

const addDecorator = (cartDecorators, decoratorToAdd) => {
    const existingDecorator = cartDecorators.find(
        (cartDecorator) => cartDecorator.id === decoratorToAdd.id);
    if(existingDecorator) {
        return cartDecorators.map((cartDecorator) => cartDecorator
        );
    }
    
    return [...cartDecorators, {...decoratorToAdd}];
}

const addPhoto = (cartPhotos, photoToAdd) => {
    const existingPhoto = cartPhotos.find(
        (cartPhoto) => cartPhoto.id === photoToAdd.id);
    if(existingPhoto) {
        return cartPhotos.map((cartPhoto) => cartPhoto
        );
    }
    
    return [...cartPhotos, {...photoToAdd}];
}

export const CartContext = createContext({
    cartItems: [],
    addToCartItems: () => {},
    cartVenues: [],
    cartVenueAdded: () => {},
    cartCaterers: [],
    cartCatererAdded: () => {},
    cartDecorators: [],
    cartDecoratorAdded: () => {},
    cartPhotos: [],
    cartPhotoAdded: () => {},
});

export const CartsProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartVenues, setcartVenues] = useState([]);
    const [cartCaterers, setcartCaterers] = useState([]);
    const [cartDecorators, setcartDecorators] = useState([]);
    const [cartPhotos, setcartPhotos] = useState([]);

    const addToCartItems = (serviceToAdd) => {
        setCartItems(addCartItem(cartItems, serviceToAdd));
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