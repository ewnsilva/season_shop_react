import React from "react";
import { useNavigate } from "react-router-dom"

import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle"
import Identifier from "../../components/Identifier";
import useCart from "../../hook/useCart";
import BackButton from "../../components/BackButton";
import BoughtItens from "../../components/BoughtItens"
import TotalValue from "../../components/TotalValueContainer"
import Popup from "../../components/Popup";
import "./style.css"


const Cart = () => {
  
  const {cartProducts, removeProduct} = useCart()
  const navigate = useNavigate()

  return (
    <div className="cart">
      <Title title="Season Shop" />

      <div className="cart__content">
        <SubTitle subTitle="Finalizando as Compras" />
        <Identifier identifier="Seu Carrinho" />
        <BackButton handleClick={() => { navigate("/") }}/>

        <div className="content__info">

          
            <div className="info__itens" >
              {cartProducts.map(
              product => 
              
              <BoughtItens 
                key={product.id} 
                infoName={product.name} 
                infoPrice={product.price}
                infoRemove={() => removeProduct(product.id)}/>
            )}
            </div>
              
           
            
          
          

          <div className="info__value">
            <TotalValue />
          </div>

        </div>

      </div>
      <Popup />
    </div>
  )
}
export default Cart