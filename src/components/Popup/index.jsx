import React from "react";
import Purchase from "../Purchase";
import "./style.css"

const Popup = (_) => {

    return (
        <div className="popup__wrapper">
            <div className="popup__window">
                <div className="popup">
                    <div className="popup__content">

                        <h2>Compra finalizada com sucesso!</h2>
                        <Purchase name="Confirmar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Popup