import React, { useEffect, useState } from "react";
import CicloVidaComp from "./CicloVidaComp";

const CicloVidaCompContainer = () => {
  let [saludo, setSaludo] = useState("Hola soy Pepito");
  const cambiarSaludo = () => {
    setSaludo("Hola soy Juancito");
  };
  let [mostrar, setMostrar] = useState(false);
  const toggleMostrarComponente = () => {
    setMostrar(!mostrar);
  };

  let [counter, setCounter] = useState(0);
  const sumar = () => {
    setCounter(counter + 1);
  };
  console.log("Me actualizcé");

  //UseEffect que se ejecuta siempre
  // useEffect(()=>{
  //   console.log("Se hizo una peticion Fetch al Backend")
  // })

  //useeffect que se ejecuta solo la primera vez que se renderiza el componente
  // useEffect(() => {
  //   console.log("Se hizo una peticion Fetch al Backend");
  // }, []);

  //useeffect que se ejecuta la primera vez que se renderiza el componente y cuando se actualiza un parametor del arreglo de dependencias
  useEffect(() => {
    console.log("Se hizo una peticion Fetch al Backend");
  }, [saludo]);


  return (
    <div>
      <h1>Ciclo de Vida de un Componente y useEffect</h1>
      <button onClick={toggleMostrarComponente}>
        Mostar/Esconder Componente
      </button>
      {mostrar ? (
        <CicloVidaComp
          sumar={sumar}
          counter={counter}
          saludo={saludo}
          cambiarSaludo={cambiarSaludo}
        />
      ) : null}
    </div>
  );
};

export default CicloVidaCompContainer;
