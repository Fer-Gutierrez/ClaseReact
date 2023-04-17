//import Navbar from "./Navbar" --> Cuando exporto de manera (export default)
//import { Navbar } from "./Navbar"; // Cuando exporto con (export antes de la funcion).
import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";
import Props from "./components/Props/Props";
import { Navbar } from "./components/Navbar/Navbar";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CounterDeHookContainer from "./components/CounterDeHook/CounterDeHookContainer";
import FetchDeHookContainer from "./components/FetchDeHook/FetchDeHookContainer";
import CicloVidaCompContainer from "./components/CicloVidaComponente/CicloVidaCompContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  let saludo = "hola como estas?";
  let edad = 15;

  //La variable saludo (props de propiedades) la puedo enviar solamente al hijo del componente
  //Vamos a enviar saludo a ItemList con un nombre de parametro (html) "x" y con {saludo}
  return (
    <div className="App">
      <Navbar color={"red"} />
      <Props saludo={saludo} edad={edad} esMayor={false} />
      <CounterContainer />
      <hr />
      <CicloVidaCompContainer />
      <FetchingData />
      <hr />
      <h1>Ejercicio de Clase 6:</h1>
      <ItemDetailContainer />
      <hr />
      <h1>Item List</h1>
      <ItemListContainer />
      <hr />
      <CounterDeHookContainer />
      <FetchDeHookContainer />
    </div>
  );
}

export default App;
