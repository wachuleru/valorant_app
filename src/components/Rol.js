export function Rol({ nombre,descripcion }) {
    return (
      <>
        <h3>Rol:</h3>
        {nombre!==undefined? <p style={{backgroundColor:'white'}}>{nombre}</p> : null }
        {descripcion!==undefined? <p style={{backgroundColor:'white'}}>{descripcion}</p>: null }
      </>
    )
  }