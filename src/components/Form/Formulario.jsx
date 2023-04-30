import { useState } from "react";

const Formulario = () => {
  const [numero, setNumero] = useState(0);
  const sumar = (num) => {
    setNumero(numero + num);
  };

  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const handlerChange = (e) => {
    //[e.target.value] --> Es BracketNotation: se usa cuando me llega la propiedad como string y no como parametro del objeto.
    // console.log(e) //si consologeo e y me fijo como viene e.target.name va a venir como "string"
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  console.log(userData);

  const envioDeFormulario = (e) => {
    e.preventDefault();
    console.log(userData);

    //Ejemplo de LOGIN:
    // let dataLogin = userData
    // axios.post("localdata/login", dataLogin)
  };

  return (
    <div>
      <h1>Estamos en el Form</h1>
      <h2>{numero}</h2>
      {/* Cuando la funcion recibe parametros debemos enviarselos con una rowFunction */}
      <button onClick={() => sumar(50)}>Sumar 50</button>
      <hr />
      <h1>Eventos de Formularios:</h1>
      <form action="" onSubmit={envioDeFormulario}>
        <input
          onChange={handlerChange} //Usamos el spread operetor para no perder las propiedad que estaban antes en el userData
          type="text"
          name="nombre"
          value={userData.nombre}
          placeholder="Ingresa tu nombre"
        />
        <input
          onChange={handlerChange} //Usamos el spread operetor para no perder las propiedad que estaban antes en el userData
          type="text"
          name="apellido"
          value={userData.apellido}
          placeholder="Ingresa tu apellido"
        />
        <input
          onChange={handlerChange} //Usamos el spread operetor para no perder las propiedad que estaban antes en el userData
          type="text"
          name="telefono"
          value={userData.telefono}
          placeholder="Ingresa tu telefono"
        />
        {/* Automaticamente el boton dentro de un formulario es de type="submit" */}
        <button type="submit">Enviar</button>
        {/* El boton de type="buttom" no evia en formulario, es decir no tiene por defecto el type="submit" */}
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Formulario;
