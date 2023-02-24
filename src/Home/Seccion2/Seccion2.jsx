import React from 'react'
import { Link } from 'react-router-dom'

const Seccion2 = () => {
  return (
    <>
    <div className="seccion2">
        <div  className="div-seccion2">
            <p style={{fontSize:"24px",fontFamily:"Dancing Script, cursive"}}>No dejes de probar mi variedad de delicias artesanales elaboradas con ingredientes de la mejor calidad</p>
            <Link to="/productos" className='linkSeccion2Prod animate__animated animate__pulse'><h4 className='h4Prod'>Ver Productos</h4></Link>
        </div>
    </div>
    <div>
      <div className="accordion accordion-flush"  id="accordionFlushExample">
  <div className="accordion-item" style={{backgroundColor:"rgba(255, 192, 203, 0.638)"}}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed"style={{backgroundColor:"rgba(255, 192, 203, 0.638)",fontSize:"20px",letterSpacing:"5px",fontWeight:"bolder"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Ubicacion
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> 
        <a href="https://goo.gl/maps/99gkR97B7shj8gZk6" style={{textDecoration:"none",color:"black"}}>
          <h4>Como llegar</h4>
        </a>
      </div>
    </div>
  </div>
</div>
    </div>

    </>
    
  )
}

export default Seccion2