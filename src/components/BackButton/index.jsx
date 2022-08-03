import React from "react";
import "./style.css"

const BackButton = ({handleClick}) => (
    <button className="backButton" onClick={handleClick}>Adicionar Novos Itens</button>
)

export default BackButton