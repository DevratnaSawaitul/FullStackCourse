import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  let selector = useSelector((state) => state.carts);
  return (
    <div className="cart">
      <h2>
        This is Cart Item:{selector.totalItems}, Cost:{selector.totalCost}
      </h2>
    </div>
  );
}
export default Cart;
