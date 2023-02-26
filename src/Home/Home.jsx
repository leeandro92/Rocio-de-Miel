import React from 'react'
import Seccion1 from './Seccion1/Seccion1'
import Seccion2 from './Seccion2/Seccion2'

const Home = () => {
  return (
    <section className='home'>
        <Seccion1/> 
        <div style={{backgroundColor:"rgba(255, 192, 203, 0.638)",padding:"10px"}}>     
        <img src="http://www.pasteleriaartesanal.com/sitio/images/nuevo_icos_ancho4.png" className="img-fluid" alt="..."style={{height:"100px"}}/> 
        <h2 style={{textAlign:"center",fontSize:"40px",padding:"3px",margin:"10px",letterSpacing:"5px"}}>Rocio de miel</h2>
      </div>   
        <Seccion2/>
    </section>
  )
}

export default Home