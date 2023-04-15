

const CounterDeHook = ({counter, increment, decrement, reset}) => {
 
  return (
    <div>
      <h1>Counter desde un Hook</h1>
      <h3>{counter}</h3>
      <button onClick={increment}>Sumar</button>
      <button onClick={decrement}>Restar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
};

export default CounterDeHook;
