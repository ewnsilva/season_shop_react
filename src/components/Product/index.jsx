import React from "react"

import AddButton from "../AddButton"
import box from "../../assets/box.png"
import useCart from "../../hook/useCart"

import "./style.css" 

const Product = ({product}) => {

	const {addToCart} = useCart()

		return(
		<div className="product">
			<h5 className="product__name">{product.name}</h5>
			<img className="product__image" src={box} alt="Imagem do Produto" />
			<p className="product__price">R$ {product.price}</p>
			<div className="extraInfo">
				<p className="product__description">{product.description}</p>
				<p className="product__department">Departamento: {product.department}</p>
				<p className="product__product">Tipo do Produto: {product.product}</p>
			</div>
			<AddButton name="Adicionar ao Carrinho" handleClick={() => addToCart(product)} /> 
		</div>
		)
}

export default Product