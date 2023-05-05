import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

//Importaciones para usar FireBase
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { ImportExport } from "@mui/icons-material";
import { ClipLoader } from "react-spinners";

const ItemListContainer = () => {
  //PROMESAS:
  /*Cuando trabajamos en el Front y realizamos una peticion (request) al BackEnd, esa peticion es una promesa.
   * Ahora crearemos una promesa para simular una peticion al BackEnd, pero en proyectos reales la peticion ya es una promesa, por lo tanto no es necesario crearla
   */

  //Una Prome esta compuesta de dos partes: resolve(), reject()
  //Dentro de los parentesis llegaria la respuesta de lo que solicitamos al BackEnd
  //resolve => es el resultado de la promesa si todo sale bien, cuando desde el backend no hubo ningun problema
  //reject => es el resultado de la promes si algo salio mal en el Backend.

  //A continuacion simularemos los casos cuando el backed me devuelve una respues resuelta (resolve) o rechazada (reject)
  // const task = new Promise((resolve, reject) => {
  //   reject("se rechazó");
  // });

  //Estados de una promesa:
  //Pending - Fullfilled - Rejected
  //Una promesa siempre se inicia como Pending y luego de terminarse arroja Fullfilled (resolve) o Rejected (reject).
  // console.log(task);

  //Manipulacion de la promesa:
  //Lo hacemos con el .then y .catch
  //Con el .then obtenemos la parte resolve de la promesa y en el callback .then((res)=>{}) podemos acceder a la respuesta del BackEnd.
  //Con el .catch obtenemos la parte reject de la promesa y en el callback .catch((err)={}) podemos acceder al error del Backend
  // task.then(respuesta => console.log(respuesta)).catch(err => console.log(err));

  //CREACION DE PRODUCTOS EN LA PAG:
  //---------------------------------
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  // console.log(categoryName);

  //PETICION AL MOCK
  //Debemos colocarlo dento de un useEffect para eviar que se dispare 2 veces la peticion.
  // useEffect(() => {
  //   const productsFiltered = products.filter(
  //     prod => prod.category.toLowerCase() === categoryName?.toLowerCase()
  //   );

  //   const APIProducts = new Promise((resolve, reject) => {
  //     resolve(categoryName ? productsFiltered : products);
  //   })
  //   APIProducts.then(res => setItems(res)).catch(err => console.log(err));
  // }, [categoryName]);

  //CONSUMIENDO FIREBASE
  useEffect(() => {
    let consulta;
    const itemsCollection = collection(db, "products");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemsCollection,
        where("category", "==", categoryName.toLowerCase())
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemsCollection;
    }

    //getDocs es una promesa:
    //res.doc --> arreglo // res.docs.data() --> esta la informacion del producto sin el id // res.dosc.id --> tenemos el id del producto.
    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return { ...prod.data(), id: prod.id };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  //Primera opcion para opciones de Rendering:
  //Return Temprano
  if (items.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          height: "90vh",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <ClipLoader
          color="#030509"
          cssOverride={{}}
          loading
          size={100}
          speedMultiplier={0.7}
        />
      </div>
    );
  }
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
