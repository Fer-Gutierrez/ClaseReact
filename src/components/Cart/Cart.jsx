import { Button } from "@mui/material";

const Cart = ({
  cart,
  limpiarCarrito,
  deleteProductById,
  totalPrice,
  totalQuantity,
  navigate,
}) => {
  return (
    <div>
      <h1>Estoy en el Carrito</h1>
      {cart.length > 0 &&
        cart.map((p) => (
          <div style={{ border: "solid 2px black", margin: "10px" }} key={p.id}>
            <h1 style={{ margin: "5px" }}>
              {p?.quantity} {p?.title}
            </h1>
            <p>Precio unitario: {p?.price}</p>
            <p>Subtotal: {p?.quantity * p?.price}</p>
            <Button
              variant="contained"
              onClick={() => deleteProductById(p?.id)}
            >
              Eliminar
            </Button>
          </div>
        ))}
      {cart.length === 0 ? (
        <div>
          <h2>El carrito esta vacio</h2>
          <Button variant="contained" onClick={() => navigate("/")}>
            Ir a comprar
          </Button>
        </div>
      ) : (
        <div>
          <h2>Estas llevando {totalQuantity} productos</h2>
          <h1>El total de su complra es de ${totalPrice}</h1>
          <Button onClick={limpiarCarrito} variant="contained">
            Limpiar Carrito
          </Button>
          <Button onClick={() => navigate("/checkout")} variant="contained">
            Finalizar Compra
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
