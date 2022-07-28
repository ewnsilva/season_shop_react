import React from "react"
import AddButton from "../AddButton"
import "./style.css" 
import box from "../../assets/box.png"

const Product = ({listProducts, name, price, description, department, product}) => (
		<div className="product">
			<h5 className="product__name">{name}</h5>
			<img className="product__image" src={box} alt="Imagem do Produto" />
			<p className="product__price">R$ {price}</p>
			<div className="extraInfo">
				<p className="product__description">{description}</p>
				<p className="product__department">Departamento: {department}</p>
				<p className="product__product">Tipo do Produto: {product}</p>
			</div>
			<AddButton name="Adicionar ao Carrinho" product={listProducts} /> 

		</div>
)
export default Product