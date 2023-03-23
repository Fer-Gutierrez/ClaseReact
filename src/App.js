import "./App.css";
//import Navbar from "./Navbar" --> Cuando exporto de manera (export default)
import { Navbar } from "./Navbar"; // Cuando exporto con (export antes de la funcion).
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
