import Counter from "./Counter";
//Inmutabilidad de los componentes:
//Esto sucede porque cada vez qeu un estado del componente cambia el componente se vuelve a renderizar. Por ello debemos utilizar los States() = Estados.
//Para ello debemos usar los HOOKS
//Para hacer uso de un Hook debo importarlo desde la libreria de React --> useState()

import { useState } from "react"; //Es un arreglo.
//En la posicion 0 va a tener el valor (estado).
//En la posicion 1 va a tener una funcion que se utiliza para cambiar el estado

//Ejemplo con un contador y user:
const CounterContainer = ({ stock, onAdd }) => {
  //Desestructuramos el arroglo useState():
  const [counter, setCounter] = useState(0);

  //Para modificar el valor del useState() debe llamar a la funcion de cambio y en los () colocarle el valor que quiero que tenga el useState()
  const sumar = () => {
    counter < stock
      ? setCounter(counter + 1)
      : alert(`El stock máximo es ${stock}`); //aqui no funcionan las abreviaciones (counter++) o (counter +=) o (counter = counter +1)
  };

  const restar = () => {
    counter > 1
      ? setCounter(counter - 1)
      : alert(`La cantidad no puede ser menor a 0`);
  };



  // const sumar10 = () => {
  //   setCounter(counter + 10);
  // };

  // const reiniciar = () => {
  //   setCounter(0);
  // };

  //Usuarios
  // const [user, setUser] = useState("");

  // const login = () => {
  //   setUser("pepito");
  // };

  return (
    <Counter
      counter={counter}
      sumar={sumar}
      // sumar10={sumar10}
      restar={restar}
      onAdd={onAdd}
      // reiniciar={reiniciar}
      // user={user}
      // login={login}
    />
  );
};

export default CounterContainer;
