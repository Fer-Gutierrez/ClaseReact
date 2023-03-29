//COMPONENTES:
//Los componentes no pueden retornar mas de un elemento.
//puede ser un fragment --> pero no le puedo dar estilos.
//puede ser un div para darle estilos

//IMPORTACION DE CSS --> SIEMPRE ANTES DE DECLARAR LA FUNCION OBJETO
  //Importamos el archivo CSS puro:
  // import "./Navbar.css"
  //en este caso usariamos --> className={"container-navbar"}

  //Importar un archivo CCS Modules: --> (mas usado)
import styles from "./Navbar.module.css";

//CLASES --> En React se usa ClassName
export const Navbar = ({color}) => {
  return (
    <div className={styles.containerNavbar}>
      <ul>
        <li style={{backgroundColor: color}}>Productos</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};
