//las props se trasfieren de padre a hijo
//Siempre se desestructura las props que se envian
//--> pero se pueden desestrucurar directamente entre llaves dentro de los () de la funcion

const Props = ({ saludo, edad }) => {
  //Desestructurar siempre las props:
  // let {edad, saludo} = props

  return (
    <div>
      <h1>Envio de Props desde el padre</h1>
      <p>{saludo}</p>
      <p>{edad}</p>
    </div>
  );
};

export default Props;
