import React from 'react'
import { useState } from 'react';
import Datos from "./Datos";
import './App.css';
import av from './images/AV.png';
import rc from './images/RC.png';
import st from './images/ST.png';


const App = () => {

  const reyes=[
    {
      nombre:"Remesas",
      color:"crimson",
      precio:178,
      imagen: rc
    },{
      nombre:"Servicios",
      color:"lightcoral",
      precio:169,
      imagen:st
    },{
      nombre:"Agencia de Viajes",
      color:"peru",
      precio:81,
      imagen: av
    }
  ]
  const[total,setTotal]=useState(0);



  return (
    <>
    <h1 className='name'>EUREKAE</h1>
    <div className="cajaCentral">
      <Datos nombre={reyes[0].nombre} color={reyes[0].color} precio={reyes[0].precio} setTotal={setTotal} imagen={reyes[0].imagen}/>

      <Datos nombre={reyes[1].nombre} color={reyes[1].color} precio={reyes[1].precio} setTotal={setTotal} imagen={reyes[1].imagen}/>

      <Datos nombre={reyes[2].nombre} color={reyes[2].color} precio={reyes[2].precio} setTotal={setTotal} imagen={reyes[2].imagen}/>
    </div>
    <h2>Total a pagar: {total}</h2>
    </>
  )
}

export default App