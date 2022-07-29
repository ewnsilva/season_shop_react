import React from "react"
import "./style.css"
import spin from "../../assets/spinLoader.png"

function Loading() {
    return(
        <div className="loading">
            <img className="loading__spin" src={spin} alt="Carregando..." />
        </div>
    )
}

export default Loading