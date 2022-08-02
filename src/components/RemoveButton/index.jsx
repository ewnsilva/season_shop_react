import React from "react";

import "./style.css"


const RemoveButton = ({name, handleClick}) => {
    return(
    <button className="removeButton" onClick={handleClick}>
        {name}
    </button>
    )
}

export default RemoveButton