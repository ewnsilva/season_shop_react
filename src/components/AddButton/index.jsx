import React from "react"

import './style.css';

const AddButton = ({name, handleClick}) => {
        
        return(
        <button className="addButton" onClick={handleClick}>
                {name}
        </button>       
        )  
}

export default AddButton