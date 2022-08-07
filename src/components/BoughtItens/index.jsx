import React from "react";
import "./style.css"

import Description from "../Description";
import Quantity from "../Quantity"
import Delivery from "../Delivery"
import Price from "../PriceContainer"
import RemoveButton from "../RemoveButton"
import useCart from "../../hook/useCart";

const BoughtItens = ({ product }) => {

    const {removeProduct} = useCart()

    return (
        <div className="boughtItens">
            <Description name={product.name} />
            <Quantity id={product.id}/>
            <Delivery />
            <div>
                <Price price={product.totalPrice} />
                <RemoveButton name="Remover" handleClick={() => removeProduct(product.id)} />
            </div>
        </div>
    )
}

export default BoughtItens

