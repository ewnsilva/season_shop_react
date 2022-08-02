import { click } from "@testing-library/user-event/dist/click";
import React from "react"
import AsideCart from "../AsideCart";
import './style.css';

const AddButton = ({name, handleClick}) => {
        
        return(
        <button className="addButton" onClick={handleClick}>
                {name}
        </button>       
        )  
}

export default AddButton