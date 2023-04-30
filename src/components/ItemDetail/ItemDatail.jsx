import React from "react";
import CounterContainer from "../Counter/CounterContainer";

const ItemDatail = ({ product, onAdd }) => {
  console.log(product);
  return (
    <div style={{ display: "flex" }}>
      <img src={product.img} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <h3>{product.description}</h3>
        <p>Precio: {product.price}</p>
        <p>Stock: {product.stock}</p>
        <CounterContainer stock={product.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDatail;
