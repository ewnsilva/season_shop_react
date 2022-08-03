import React from "react"
import './style.css';

const BuyButton = ({name, handleClick}) => (
        <button className="buyButton" onClick={handleClick}>{name}</button>
)
export default BuyButton