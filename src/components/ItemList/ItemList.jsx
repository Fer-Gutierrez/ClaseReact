//las props se trasfieren de padre a hijo
//Siempre se desestructura las props que se envian
//--> pero se pueden desestrucurar directamente entre llaves dentro de los () de la funcion

const ItemList = ({ saludo, edad }) => {
  //Desestructurar siempre las props:
  // let {edad, saludo} = props

  return (
    <div>
      <h1>ItemList</h1>
      <h2>{saludo}</h2>
      <h2>{edad}</h2>
    </div>
  );
};

export default ItemList;
