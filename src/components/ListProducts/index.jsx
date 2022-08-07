import React from "react"
import { useState, useEffect } from "react"
import Product from "../Product"
import Loading from "../Loading"
import api from "../../services/api"
import "./style.css"

const ListProducts = () => {

    const [products, setProducts] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const fetchProducts = () => {
        api.get("/products")
            .then(
                (response) => {
                    setProducts(response.data)
                    setRemoveLoading(true)
                }
            )
    }

    useEffect(() => {
        setTimeout(
            () => {
                fetchProducts()
            }, 500)
    }, [])

    return (
        <div className="list__products">
            {products.map(product => (
                <Product key={product.id}
                    product={product}
                />
            ))}
            {!removeLoading && <Loading />}
        </div>
    )
}
export default ListProducts