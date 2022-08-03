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

    const updateValue = (product) => {
        let allPrices = cartProducts.filter(product.price)
            let totalMoney = 0
            const prices = allPrices
            for(let i = 0; i< prices.lenght; i++)(
            totalMoney += Number(prices[i].price))
            return totalMoney
        }

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeProduct, updateValue }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider }