import React, { useEffect, useState } from "react";
import ItemDatail from "./ItemDatail";
import { products } from "./../../productsMock";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  //useParams te trae siempre un objeto con propiedades, dichas propiedades tienen como key lo que le puse luego del /: en la ruta (en App.js)
  //Podemos desestructurar el objeto para acceder directamente a una o varias de sus propiedades.
  const { id } = useParams();
  //useParams te trae siempre un string dentro de cada propiedad, por lo tanto debemos convertirlo a numero para usar el find().
  console.log(typeof id); 
  
  useEffect(() => {
    let encontrado = products.find(prod => prod.id === +id); //Convertimos el id (string) en id (number).
    setTimeout(() => {
      setProduct(encontrado);
    }, 2000);
  }, [id]);

  return (
    <div>
      <ItemDatail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
