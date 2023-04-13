import "./App.css";
import Counter from "./components/Counter/Counter";
import ItemList from "./components/ItemList/ItemList";
import { Navbar } from "./components/Navbar/Navbar";

import "./App.css";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CounterDeHook from "./components/CounterDeHook/CounterDeHook";
import FetchDeHookContainer from "./components/FetchDeHook/FetchDeHookContainer";

//import Navbar from "./Navbar" --> Cuando exporto de manera (export default)
//import { Navbar } from "./Navbar"; // Cuando exporto con (export antes de la funcion).

function App() {
  let saludo = "hola como estas?";
  let edad = 15;

  //La variable saludo (props de propiedades) la puedo enviar solamente al hijo del componente
  //Vamos a enviar saludo a ItemList con un nombre de parametro (html) "x" y con {saludo}
  return (
    <div className="App">
      <Navbar color={"red"} />
      <ItemList saludo={saludo} edad={edad} esMayor={false} />
      <Counter />
      <FetchingData />
      <ItemDetailContainer />
      <CounterDeHook />
      <FetchDeHookContainer />
    </div>
  );
}

export default App;
