//import Navbar from "./Navbar" --> Cuando exporto de manera (export default)
//import { Navbar } from "./Navbar"; // Cuando exporto con (export antes de la funcion).
import "./App.css";
//Enrutados:
//-BrowserRouter: Se usa como componente de apertura y cierre en distintas lineas. Dentro se arma el sistema de enrutado.
//-Routes: Configuraremos cada uta unica, cada vista unica. Apertura y cierre en distintas lineas
//-Route: Esta es la vista o ruta definita y si es de apertura y cierre en la misma linea
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterContainer from "./components/Counter/CounterContainer";
import Props from "./components/Props/Props";
import { Navbar } from "./components/Navbar/Navbar";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CounterDeHookContainer from "./components/CounterDeHook/CounterDeHookContainer";
import FetchDeHookContainer from "./components/FetchDeHook/FetchDeHookContainer";
import CicloVidaCompContainer from "./components/CicloVidaComponente/CicloVidaCompContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Formulario from "./components/Form/Formulario";
import CartContainer from "./components/Cart/CartContainer";
import { ToastContainer } from "react-toastify";
import AlertToastify from "./utils/alerts/Error/AlertToastifyError";
import CartContextProvider from "./context/CartContext";

function App() {
  let saludo = "hola como estas?";
  let edad = 15;

  //La variable saludo (props de propiedades) la puedo enviar solamente al hijo del componente
  //Vamos a enviar saludo a ItemList con un nombre de parametro (html) "x" y con {saludo}
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Routes>
        {/* Layout que envuelve todas las vistas (Padre) */}
        <Route element={<Navbar />}>
          {/* La ruta principal */}
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />

          {/* Las distintas vistas */}
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/Signup" element={<h1>Aca deberias registrarte</h1>} />
          <Route path="/form" element={<Formulario />} />
          <Route path="/cart" element={<CartContainer />} />
        </Route>

        {/* Para rutas que no existen */}
        <Route path="*" element={<h1>Lo siento la ruta no existe</h1>} />
      </Routes>
    </CartContextProvider>
      <AlertToastify />
    </BrowserRouter>
  );
}

export default App;

// <div className="App">
//     <Navbar color={"red"} />
//     <Props saludo={saludo} edad={edad} esMayor={false} />
//     <CounterContainer />
//     <hr />
//     <CicloVidaCompContainer />
//     <FetchingData />
//     <hr />
//     <h1>Ejercicio de Clase 6:</h1>
//     <ItemDetailContainer />
//     <hr />
//     <h1>Item List</h1>
//     <ItemListContainer />
//     <hr />
//     <CounterDeHookContainer />
//     <FetchDeHookContainer />
//   </div>
