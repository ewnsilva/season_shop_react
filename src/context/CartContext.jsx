import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])

    const addToCart = (product) => {

        if(!cartProducts.includes(product)){
        setCartProducts(prevState => [...prevState, product])
        }

    }

    const removeProduct = (id) => {
        setCartProducts(prevState => {
            const index = prevState.findIndex(product => product.id === id)
            const newIndex = [...prevState]
            newIndex.splice(index, 1)
            return newIndex
        })
    }

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeProduct }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider }