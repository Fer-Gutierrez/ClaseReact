import './App.css';
import Counter from './components/Counter/Counter';
import ItemList from './components/ItemList/ItemList';
import { Navbar } from './components/Navbar/Navbar';

function App() {

  let saludo = "hola como estas?";
  let edad = 15;

  //La variable saludo (props de propiedades) la puedo enviar solamente al hijo del componente
  //Vamos a enviar saludo a ItemList con un nombre de parametro (html) "x" y con {saludo}
  return (
    <div className="App">
      <Navbar color={"red"} />
      <ItemList saludo={saludo} edad={edad} esMayor={false}/>
      <Counter />
    </div>
  );
}

export default App;
