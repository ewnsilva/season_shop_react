import React from "react";
import "./style.css"



const Purchase = ({name, handleClick}) => {

    return(
    <button className="buyConfirm" onClick={handleClick}>{name}</button>
    )
}

export default Purchase