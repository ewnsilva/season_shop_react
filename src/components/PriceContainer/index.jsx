import React from "react";
import { formatPrice } from "../../utils/format";
import "./style.css"

const Price= ({price}) => {

    const priceFormatted = formatPrice(price)
    
    return(    
    <div className="priceContainer">
        <h4>Preço</h4>
        <p>{priceFormatted}</p>
    </div>
    )
}

export default Price