//Inmutabilidad de los componentes:
//Esto sucede porque cada vez qeu un estado del componente cambia el componente se vuelve a renderizar. Por ello debemos utilizar los States() = Estados.
//Para ello debemos usar los HOOKS
//Para hacer uso de un Hook debo importarlo desde la libreria de React --> useState()

import { useState } from "react"; //Es un arreglo.
//En la posicion 0 va a tener el valor (estado).
//En la posicion 1 va a tener una funcion que se utiliza para cambiar el estado

//Ejemplo con un contador y user:
const Counter = () => {
  //Desestructuramos el arroglo useState():
  const [counter, setCounter] = useState(0);

  //Para modificar el valor del useState() debe llamar a la funcion de cambio y en los () colocarle el valor que quiero que tenga el useState()
  const sumar = () => {
    setCounter(counter + 1); //aqui no funcionan las abreviaciones (counter++) o (counter +=) o (counter = counter +1)
  };

  const restar = () => {
    setCounter(counter - 1);
  };

  const sumar10 = () => {
    setCounter(counter + 10);
  };

  const reiniciar = () => {
    setCounter(0);
  };

  //Usuarios
  const [user, setUser] = useState("");

  const login = () => {
    setUser("pepito");
  };

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
