import React from 'react'


function Cena({nombre,precio,color,imagen,setTotal}) { 
    const comprar=(elemento)=>{ 
      setTotal((e)=> e+precio);  
      elemento.target.parentNode.parentNode.parentNode.parentNode.style.display="none";      
    }

  return (
    <>
        <div className="rey" style={{backgroundColor:color}}>
            <h1>{nombre}</h1>
            <img className= "img" src={imagen}/>
            <div>
              <div className="titulo">Precio:</div>
                <div className="precio">
                  {precio}€
                  <div>
                    <button onClick={comprar}>Comprar</button>
                  </div>
              </div>
            </div>  
        </div>
    </>
  )
}

export default Cena
