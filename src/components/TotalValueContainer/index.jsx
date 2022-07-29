import React from "react";
import "./style.css"

import Purchase from "../Purchase"

const TotalValueContainer = (props) => (
    <div className="totalValueContainer">
        <h3>Valor Total</h3>
        <h4>R$  1,99</h4>
        <Purchase />
    </div>
)
export default TotalValueContainer
