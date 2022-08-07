import React from "react";

import "./style.css"

const Popup = ({ handleClick }) => {

    return (
        <div className="popup__wrapper">
            <div className="popup__window">
                <div className="popup">
                    <div className="popup__content">
                        <h2>Compra finalizada com sucesso!</h2>
                        <button className="content__button" onClick={handleClick}>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Popup