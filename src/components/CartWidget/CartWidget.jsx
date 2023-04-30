import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <div style={{ margin: "10px" }}>
      <BsFillCartFill />
      <span>{total}</span>
    </div>
  );
};

export default CartWidget;
