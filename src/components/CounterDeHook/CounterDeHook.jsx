import useCounter from "../../utils/hooks/UseCounter";

const CounterDeHook = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Sumar</button>
      <button onClick={decrement}>Restar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
};

export default CounterDeHook;
