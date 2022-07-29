import React from "react";
import "./style.css"

import Description from "../Description";
import Quantity from "../Quantity"
import Delivery from "../Delivery"
import Price from "../PriceContainer"

const BoughtItens = (props) => (
    <div className="boughtItens">
        <Description />
        <Quantity />
        <Delivery />
        <Price />
    </div>
)

export default BoughtItens

