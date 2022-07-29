import React from "react";
import "./style.css"

import image from "../../assets/box.png"

const Description = (props) => (
    <div className="description">
        <img className="imageProduct" src={image} alt=""></img>
        <h3 className="nameProduct">Nome do Produto</h3>
    </div>
)

export default Description