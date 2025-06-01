import React from "react";
import jsonFile from "./product.json";
import Cart from "./Cart";
import Product from "./Product";
import "../style.css";
function App2() {
  console.log(jsonFile);
  document.title = "Project Management System";
  return (
    <div>
      <Cart />
      <hr />
      <div className="product-grid">
        {jsonFile.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
export default App2;
