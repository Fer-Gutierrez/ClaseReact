import { useState } from "react";
//El Hook debe empesar con la palabra clave use de esta manera react entiende que se trata de un hook.
//De esta manera lo puedo utilizar en otros archivos
//Sirve para reutilizar codigo y no duplicar
//Hace la app mas escalable
const useCounter = initial => {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return { counter, increment, decrement, reset };
};

export default useCounter;
