import React, { createContext, useReducer } from 'react';

const initialState = {
    cart:[],
    images : [
        {id:1,src: "images/image-product-1.jpg",alt:"product-1"},
        {id:2,src: "images/image-product-2.jpg",alt:"product-2"},
        {id:3,src: "images/image-product-3.jpg",alt:"product-3"},
        {id:4,src: "images/image-product-4.jpg",alt:"product-4"},
    ],
    products: [
        {
            id : "p_1",
            comName:"SNEAKER COMPANY",
            proName:"Fall Limitted Ediction Sneakers",
            proDescription : `These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything the
            weather can offer.`,
            disPrice:125.00,
            discount : "50%",
            price : 250.00,
        }
    ]
}

export const cartReducer = (state , action) => {
    
    switch(action.type){
        case("Add"):
            if(action.count <= 0){
                return state;
            }
            let item = state[0];
            if(!item?.count){
                item = {...item , count:0};
            }
            let count = item?.count + action.count;
            return [{...action , count}];
        
        case("Remove"):
            return [];

        default:
            return state;
    }

}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children})=> {
    const images = initialState.images;
    const products = initialState.products;
    const [cart , dispatchCart] = useReducer(cartReducer , initialState.cart);

    const addCartHandler = (payload) => {
        dispatchCart({type : "Add" , payload});
    }

    return (
        <GlobalContext.Provider value={{images , products , addCartHandler , cart}}>
            {children}
        </GlobalContext.Provider>
    );
}