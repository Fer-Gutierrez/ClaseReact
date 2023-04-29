//COMPONENTES:
//Los componentes no pueden retornar mas de un elemento.
//puede ser un fragment --> pero no le puedo dar estilos.
//puede ser un div para darle estilos

//IMPORTACION DE CSS --> SIEMPRE ANTES DE DECLARAR LA FUNCION OBJETO
//Importamos el archivo CSS puro:
// import "./Navbar.css"
//en este caso usariamos --> className={"container-navbar"}

//Importar un archivo CCS Modules: --> (mas usado)
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imgLogo from "../../assets/img/LogoMiUniverso.png";

//Outlet: La funcion es darle acceso a los childrens del componente.- Ver la ruta que del Navbar es padre de varios componentes.
//antes tengo que tener las rutas en App.js
//Link: Es como una ancor <a> pero de react. Tiene beneficio de que no refrezca la pagina (no debemos hacer eso en React para no perder datos)
import { Outlet, Link } from "react-router-dom";

//CLASES --> En React se usa ClassName
export const Navbar = ({ color }) => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        {/* Imagenes - Forma 1: Para esta forma se sugiere guardar las imagenes en la nube para no perderlas */}
        {/* <img src="https://res.cloudinary.com/dduwd2qy1/image/upload/v1680406957/Mi%20Universo%20Astral/LogoMiUniverso2_mhe468.jpg" alt="" /> */}
        {/* Imagenes - Forma 2 */}
        <Link to={"/"}>
          <img
            className={styles.logoImg}
            src={imgLogo}
            alt="Logo mi universo"
          />
        </Link>
        {/* Imagenes - Forma 3  - Guardo el logo en la carpeta Public */}
        {/* <img src="logo192.png" alt="Logo react" /> */}
        <ul className={styles.listaLinks}>
          {/* <li style={{ backgroundColor: color }}>Todas</li>
          <li>Urbanas</li>
          <li>Deportivas</li> */}
          <Link to={`/`}>Todas</Link>
          <Link to={`/category/urbanas`}>Urbanas</Link>
          <Link to={`/category/deportivas`}>Deportivas</Link>
          <Link to={`/form`}>Form</Link>
        </ul>

        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </div>

      <Outlet />
    </div>
  );
};
