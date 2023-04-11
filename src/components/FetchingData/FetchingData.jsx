import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [data, setData] = useState([]);
  const [dataById, setDatabyId] = useState([]);

  useEffect(() => {
    const obtenerPost = fetch("https://jsonplaceholder.typicode.com/posts");
    obtenerPost
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));

    const obtenerPorId = fetch("https://jsonplaceholder.typicode.com/posts/1");
    obtenerPorId
      .then(res => res.json())
      .then(res => setDatabyId(res))
      .catch(err => console.log(err));
  }, []);

  const crearNuevoPost = () => {
    let crearPost = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      // headers:{
      //   "authorization":"asfasfuhasfljasfasg435wjkldf2",
      //   "content-type": "application-json"
      // },
      body: JSON.stringify({
        userId: 1,
        title: "Estoy probando un posst",
        body: "esto es una prueba.",
      }),
    });
    crearPost.then(res => res.json()).then(res => console.log(res));
  };

  const modificarPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/2", {
      method: "PATCH",
      // headers:{
      //   "authorization":"asfasfuhasfljasfasg435wjkldf2",
      //   "content-type": "application-json"
      // },
      body: JSON.stringify({
        title: "Estoy modificando un posst",
      }),
    });
  };

  console.log(data);
  console.log(dataById);

  return (
    <div>
      <h1>Peticiones</h1>
      <button onClick={crearNuevoPost}>Crear Post</button>
      <button onClick={modificarPost}>Modificar Post</button>
    </div>
  );
};

export default FetchingData;
