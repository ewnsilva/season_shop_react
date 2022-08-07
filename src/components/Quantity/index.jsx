import React, { useEffect, useState } from "react";
import useCart from "../../hook/useCart";
import "./style.css"

const Quantity = ({id}) => {

    const { updatePrice } = useCart()
    const [value, setValue] = useState(1)

    const handleValues = (value) => {
        if(value >= 1){
            setValue(value)
        }
    }

    useEffect(() => {
            updatePrice(id, value)
    }, [value])


    return(
    <div className="quantity">
        <h4>Quandidade</h4>
        <input type="number" min="1" className="inputNumber" onChange={(e) => handleValues(e.target.value)} value={value}/>
    </div>
    )
}

export default Quantity