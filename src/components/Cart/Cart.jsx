import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = ({ cart }) => {
  const { limpiarCarrito, deleteProductById } = useContext(CartContext);

  return (
    <div>
      <h1>Estoy en el Carrito</h1>
      {cart.map((p) => (
        <div style={{ border: "solid 2px black", margin: "10px" }} key={p.id}>
          <h1 style={{ margin: "5px" }}>
            {p?.quantity} {p?.title}
          </h1>
          <p>Precio unitario: {p?.price}</p>
          <p>Subtotal: {p?.quantity * p?.price}</p>
          <Button variant="contained" onClick={() => deleteProductById(p?.id)}>
            Eliminar
          </Button>
        </div>
      ))}
      <Button onClick={limpiarCarrito} variant="contained">
        Limpiar Carrito
      </Button>
    </div>
  );
};

export default Cart;
