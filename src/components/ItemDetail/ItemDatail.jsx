import React from "react";

const ItemDatail = ({ product }) => {
  console.log(product)
  return (
    <div key={product.id}>
      <h2>{product.title}</h2>
      <h3>{product.description}</h3>
      <p>Precio: {product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ItemDatail;
