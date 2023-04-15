import useCounter from "../../utils/hooks/UseCounter";
import CounterDeHook from "./CounterDeHook";

const CounterDeHookContainer = () => {
  
  const { counter, increment, decrement, reset } = useCounter(0);
  
  return (
    <div>
      <CounterDeHook counter={counter} increment={increment} decrement={decrement} reset={reset} />
    </div>
  )
}

export default CounterDeHookContainer
