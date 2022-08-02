import React from "react";
import "./style.css"

import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle"
import Identifier from "../../components/Identifier";

import BackButton from "../../components/BackButton";
import BoughtItens from "../../components/BoughtItens"
import TotalValue from "../../components/TotalValueContainer"


const Cart = () => (
  <div className="cart">
    <Title title="Season Shop" />

    <div className="cart__content">
      <SubTitle subTitle="Finalizando as Compras" />
      <Identifier identifier="Seu Carrinho" />
      <BackButton />

      <div className="content__info">

        <div className="info__itens">
          <BoughtItens />
          <BoughtItens />
          <BoughtItens />
        </div>

        <div className="info__value">
          <TotalValue />
        </div>

      </div>

    </div>
  </div>
)
export default Cart