import { useEffect, useState } from "react";
import axios from "axios";

//endpoint es la url donde consultari
//initial es el tipo de objeto que devolveria el endpoint -Ej: si consulto los productos devuelve un [array]
// si consulto 1 producto devuelve un {objeto}
const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    let getData = axios.get(endpoint);
    getData.then(res => setData(res.data)).catch(err => console.log(err));
  }, [endpoint]);

  //Por buenas practicas retornamos como objetos la data por si el dia de mañana quierop devolver un errorMessage
  return { data };
};

export default useFetch;
