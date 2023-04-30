import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const {
    cart,
    limpiarCarrito,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
  } = useContext(CartContext);

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
      />
    </div>
  );
};

export default CartContainer;
