const Counter = ({
  counter,
  sumar,
  restar,
  sumar10,
  reiniciar,
  user,
  login,
}) => {
  return (
    <div>
      <h1>Esto es un counter</h1>
      <button onClick={sumar}>Sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={sumar10}>Sumar 10</button>
      <button onClick={reiniciar}>Reiniciar a 0</button>
      <br />
      <h1>Ejemplo de Ingreso de User:</h1>
      <br />
      <button onClick={login}>Ingresar</button>

      {/* Tecnica de render: */}
      {user.length > 0 ? <h2>Usuario: {user}</h2> : <h2>Por favor Ingresar</h2>}
    </div>
  );
};

export default Counter;
