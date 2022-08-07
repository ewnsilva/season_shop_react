import React from "react";
import "./style.css"

import Purchase from "../Purchase"
import useCart from "../../hook/useCart";

const TotalValueContainer = ({click = () => {}}) => {
  const { updateValue } = useCart()

  return (
    <div className="totalValueContainer">
      <h3>Valor Total</h3>
      <h4>{updateValue()}
      </h4>
      <Purchase name="Confirmar Compra" handleClick={click} />
    </div>
  )
}
export default TotalValueContainer
