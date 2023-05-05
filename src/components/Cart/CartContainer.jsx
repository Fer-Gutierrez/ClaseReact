import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const {
    cart,
    limpiarCarrito,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
  } = useContext(CartContext);

  const navigate = useNavigate();

  let totalPrice = getTotalPrice();
  let totalQuantity = getTotalQuantity();

  return (
    <div>
      <Cart
        cart={cart}
        limpiarCarrito={limpiarCarrito}
        deleteProductById={deleteProductById}
        totalPrice={totalPrice}
        totalQuantity={totalQuantity}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
