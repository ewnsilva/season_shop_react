import { createContext, useState } from "react";
import { formatPrice } from "../utils/format";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])

    const addToCart = (product) => {

        if (!cartProducts.includes(product)) {
            const newProduct = { ...product, quantity: 1, totalPrice: product.price }
            setCartProducts(prevState => [...prevState, newProduct])
        }
    }

    const removeProduct = (id) => {
        setCartProducts(prevState => {
            const index = prevState.findIndex(product => product.id === id)
            const products = [...prevState]
            products.splice(index, 1)
            return products
        })
    }

    const updatePrice = (id, quantity) => {
        const index = cartProducts.findIndex(product => product.id === id)
        const products = [...cartProducts]
        const product = products[index]

        product.totalPrice = quantity * product.price

        setCartProducts(products)
    }

    const updateValue = () => {

        const total = cartProducts.reduce(
            (previousValue, currentValue) => previousValue + currentValue.totalPrice, 0
        );

        const totalFormatted = formatPrice(total)

        return totalFormatted
    }

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeProduct, updatePrice, updateValue }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider }