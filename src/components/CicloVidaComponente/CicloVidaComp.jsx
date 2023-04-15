import React from "react";
import styles from "./CicloVidaComp.module.css";

const CicloVidaComp = ({ sumar, counter, saludo, cambiarSaludo }) => {
  return (
    <div className={styles.alignLeft}>
      <ol>
        <li>Montaje:</li>
        <p>
          El ciclo de vida de un componente comienza cuando el componente de
          Monta.Es decir de renderiza por primera vez.
        </p>
        <li>Actualizacion:</li>
        <p>
          Cada vez que cambia el estado de un compenente el mismo se vuelve a
          renderizar. Un componente se actualiza cuando cambia un estado interno
          del componente (contador) y cuando cambian las props (lo que se envia
          desde el padre)
        </p>
        <li>Desmontaje:</li>
        <p>
          Cada vez que se destruye el componente. Cuando actualizo la pagina el
          componente pierde su valor
        </p>
      </ol>
      <h5>Aqui entra el juego el proceso de Diffing:</h5>
      <p>
        React traba con algo que se llama VIRTUAL DOM. Es como una capa exterior
        del DOM. Cada vez que escucha un cambio React compara el cambio del
        VIRTUAL DOM con el DOM y renderiza solo el componente que cambió y sus
        hijos.
      </p>
      <h3>{counter}</h3>
      <button onClick={sumar}>Sumar</button>
      <h3>{saludo}</h3>
      <button onClick={cambiarSaludo}>Cambiar Saludo</button>
      <h2 className={styles.alignCenter}>useEffect</h2>
      <p>
        Aqui es donde es util el "useEffect", ya que si por ejemplo cada vez que
        se actualiza un componente se renderiza nuevamente, si tuviesemos una
        consulta a la API lo consultaria cada vez que se actualiza.
      </p>
      <p>
        Entonces, para evitar que un fragmento de codigo se ejecute cada vez que
        se renderiza un componente se utiliza el useEffect.
      </p>
      <h3>Sintaxis</h3>
      <ol>
        <li>Primer parametro: la funcion a ejecutar</li>
        <li>Segundo parametro (Opcional): arreglo de dependencias</li>
      </ol>
      <h3>useEffect tiene 3 formas de utilizarse</h3>
      <ol>
        <li>
          Sin el segundo parametro: Se va a ejecutar siempre que se renderice el
          componente
        </li>
        <li>
          Con un arreglo de dependencias vacio en el segundo parametro: Se
          ejecuta solo la primera vez que se renderiza.
        </li>
        <li>
          Con variables/parametros dentro del arreglo de dependencias: Se
          ejecuta la primera vez que se renderiza y cada vez que canbia uno de
          los parametros/variables que tiene en el arreglo.
        </li>
      </ol>
      <p>
        El useEffect se lee despues de que se leyó todo el componente. Es decir
        se ejecuta al final de todo.
      </p>
    </div>
  );
};

export default CicloVidaComp;
