import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let existe = cart.some((p) => p.id === id);
    return existe;
  };

  const agregarAlCarrito = (product) => {
    if (isInCart(product.id)) {
      let nuevoCarrito = cart.map((p) => {
        return p.id === product.id
          ? { ...p, quantity: p.quantity + product.quantity }
          : p;
      });
      setCart(nuevoCarrito);
    } else {
      setCart([...cart, product]);
    }
  };

  const limpiarCarrito = () => {
    setCart([]);
  };

  const deleteProductById = (id) => {
    const nuevoCarrito = cart.filter((p) => p.id !== id);
    setCart(nuevoCarrito);
  };

  let data = {
    cart,
    setCart,
    agregarAlCarrito,
    limpiarCarrito,
    deleteProductById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
