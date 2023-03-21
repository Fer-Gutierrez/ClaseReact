//Un componente es simplemente una funcion
export function Login(){

  let nombre = "Fernando"

  const saludar = ()=>{
    alert(`Hola soy ${nombre}`)
  }

  return <div style={{backgroundColor: "steelblue"}}>
    <h1>Hola desde el componente Login</h1>
    <p>mi nombre es {nombre}</p>
    <button onClick={saludar}>Saludo</button>
    </div>
}