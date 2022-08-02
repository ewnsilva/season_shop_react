import React from "react";
import "./style.css"

import image from "../../assets/box.png"

const Description = (_) => {

    return(
    <div className="description">
        <img className="imageProduct" src={image} alt=""></img>
            <p>Nome do Produto</p>
    </div>
    )
}

export default Description