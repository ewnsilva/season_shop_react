import React from "react"
import './style.css';

const AddButton = ({name, product}) => {
        return(
        <button className="addButton">{name}</button>
        )
}

export default AddButton