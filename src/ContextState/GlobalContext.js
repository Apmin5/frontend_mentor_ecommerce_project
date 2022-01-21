import React, { createContext } from 'react';

const initialState = {
    cart:[],
    images : [
        {id:1,src: "images/image-product-1.jpg",alt:"product-1"},
        {id:2,src: "images/image-product-2.jpg",alt:"product-2"},
        {id:3,src: "images/image-product-3.jpg",alt:"product-3"},
        {id:4,src: "images/image-product-4.jpg",alt:"product-4"},
    ]
}


export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children})=> {
    const images = initialState.images;
    return (
        <GlobalContext.Provider value={{images}}>
            {children}
        </GlobalContext.Provider>
    );
}