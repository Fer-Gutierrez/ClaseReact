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

//CLASES --> En React se usa ClassName
export const Navbar = ({ color }) => {
  return (
    <div className={styles.containerNavbar}>
      {/* Imagenes - Forma 1: Para esta forma se sugiere guardar las imagenes en la nube para no perderlas */}
      {/* <img src="https://res.cloudinary.com/dduwd2qy1/image/upload/v1680406957/Mi%20Universo%20Astral/LogoMiUniverso2_mhe468.jpg" alt="" /> */}
      {/* Imagenes - Forma 2 */}
      <img src={imgLogo} alt="Logo mi universo" />
      {/* Imagenes - Forma 3  - Guardo el logo en la carpeta Public */}
      {/* <img src="logo192.png" alt="Logo react" /> */}
      <ul>
        <li style={{ backgroundColor: color }}>Productos</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};
