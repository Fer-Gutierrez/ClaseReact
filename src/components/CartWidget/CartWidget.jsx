import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div style={{ margin: "10px" }}>
      <BsFillCartFill />
      <span>{cart.length}</span>
    </div>
  );
};

export default CartWidget;
