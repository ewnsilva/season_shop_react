import React from "react";

import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle"
import ListProducts from "../../components/ListProducts"
import AsideCart from "../../components/AsideCart"

import "./style.css"

const App = () => {
  return (
    <div className="App">
      <Title title="Season Shop" size="small" />
      <SubTitle subTitle="Home" size="small" />
      <ListProducts />
      <AsideCart />
    </div>
  )
}
export default App