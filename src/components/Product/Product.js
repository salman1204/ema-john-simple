import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./product.css";

const Product = (props) => {
  
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>
          <small>By: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock - Order now</small>
        </p>
        <button className="main-button" onClick ={() => props.handleProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
