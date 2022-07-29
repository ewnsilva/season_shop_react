import React from "react"
import './style.css';
import BuyButton from "../BuyButton"

const AsideCart = (props) => (
        <aside className="asideCart">
            <div className="asideCart__upperBox">
                <h2 className="upperBox__title">Carrinho</h2>
                Teste
            </div>
            <div className="asideCart__content">
                <BuyButton name="Comprar"/>
            </div>
        </aside>
)
export default AsideCart