import { Button, Typography } from "@mui/material";

const Counter = ({
  counter,
  sumar,
  restar,
  onAdd,
  // sumar10,
  // reiniciar,
  // user,
  // login,
}) => {
  return (
    <div>
      <Typography variant="h6">Cantidad: </Typography>
      <div style={{ display: "flex" }}>
        <Button variant="contained" onClick={restar} style={{}}>
          Restar
        </Button>
        <h3 style={{ margin: "0 20px" }}>{counter}</h3>
        <Button variant="contained" onClick={sumar}>
          Sumar
        </Button>

        {/* <button onClick={sumar10}>Sumar 10</button>
      <button onClick={reiniciar}>Reiniciar a 0</button> */}
        {/* <br />
      <h1>Ejemplo de Ingreso de User:</h1>
      <br />
      <button onClick={login}>Ingresar</button> */}

        {/* Tecnica de render: */}
        {/* {user.length > 0 ? <h2>Usuario: {user}</h2> : <h2>Por favor Ingresar</h2>} */}
      </div>
      {onAdd && (
        <Button variant="contained" onClick={() => onAdd(counter)}>
          Agregar al carrito
        </Button>
      )}
    </div>
  );
};

export default Counter;
