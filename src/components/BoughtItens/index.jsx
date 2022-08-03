import React from "react";
import "./style.css"

import Description from "../Description";
import Quantity from "../Quantity"
import Delivery from "../Delivery"
import Price from "../PriceContainer"

const BoughtItens = ({infoName, infoPrice, infoRemove}) => (
    <div className="boughtItens">
        <Description name={infoName}/>
        <Quantity />
        <Delivery />
        <Price price={infoPrice} remove={infoRemove}/>
    </div>
)

export default BoughtItens

