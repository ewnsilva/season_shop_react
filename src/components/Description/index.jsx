import React from "react";
import "./style.css"

import image from "../../assets/box.png"

const Description = ({name}) => {

    return (
        <div className="description">
            <img className="imageProduct" src={image} alt=""></img>
            <p>{name}</p>
        </div>
    )
}

export default Description