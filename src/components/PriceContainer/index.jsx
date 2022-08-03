import React from "react";
import "./style.css"

import Remove from "../RemoveButton"

const PriceContainer = ({price, remove}) => {
    
    return(    
    <div className="priceContainer">
        <h4>Preço</h4>
        <p>R$ {price}</p>
        <Remove name="Remover" handleClick={remove}/>
    </div>
    )
}

export default PriceContainer