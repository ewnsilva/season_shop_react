import React from "react";
import "./style.css"

import Remove from "../RemoveButton"

const PriceContainer = (props) => (
    <div className="priceContainer">
        <h4>Preço</h4>
        <p>RS 1,99</p>
        <Remove name="Remover" />
    </div>
)

export default PriceContainer