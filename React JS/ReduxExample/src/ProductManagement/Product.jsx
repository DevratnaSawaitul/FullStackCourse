import React from "react";
import "../style.css";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "./cartSlice";
function Product(props) {
  let dispatch = useDispatch();
  return (
    <div className="product-card">
      {props.url && (
        <img src={props.url} alt={props.name} className="product-image" />
      )}
      <h5>{props.name}</h5>
      <p>Price: ${props.price}</p>
      <button id={`${props.id}`} onClick={() => dispatch(addCart(props))}>
        Add to Cart
      </button>
      <button
        style={{ backgroundColor: "red" }}
        id={`${props.id}`}
        onClick={() => dispatch(removeCart(props))}
      >
        Remove
      </button>
    </div>
  );
}

export default Product;
