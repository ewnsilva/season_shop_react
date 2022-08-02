import React from "react"

import BuyButton from "../BuyButton"
import useCart from "../../hook/useCart";
import RemoveButton from "../RemoveButton"

import './style.css';

const AsideCart = (_) => {

    const {cartProducts, removeProduct} = useCart()

    return (
        <aside className="asideCart">
            <div className="asideCart__upperBox">
                <h2 className="upperBox__title">Carrinho</h2>

                    {cartProducts.map(
                        product =>
                        <div key={product.id} className="upperBox__products">
                            <li>{product.name}</li>
                            <RemoveButton name="X" handleClick={() => removeProduct(product.id)}/>
                        </div>
                    )}
                
            </div>
            <div className="asideCart__content">
                <BuyButton name="Comprar"/>
            </div>
        </aside>
    )
}
export default AsideCart