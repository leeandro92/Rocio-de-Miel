import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div style={{padding:"5px"}}>
        <h5 style={{fontSize:"17px",textAlign:"center"}}>Seguime en mis redes</h5>
      </div>
      <div style={{display:"flex",justifyContent:"center",width:"100%",height:"60px"}}>
          <div className='igContenedor' style={{display:"flex",justifyContent:"space-evenly"}}> 
              <a href="https://www.instagram.com/monicadruk/" className='instagram'>  
                <i className="bi bi-instagram"></i> 
              </a>
            </div> 
            <div className='igContenedor'>
              <a href="https://api.whatsapp.com/send?phone=5491133392396" className='whatsap'> 
                <i className="bi bi-whatsapp"></i>
              </a>     
            </div>   
            <div className='igContenedor'>
              <a href="https://www.facebook.com/monica.ana" className='facebook'>
                <i className="bi bi-facebook" ></i>
              </a>
              
            </div> 
        </div>   
        <div style={{backgroundColor:"black",height:"25%",color:"white"}}>
            <h6 style={{textAlign:"center",padding:"5px",fontSize:"0.7rem"}}>
            Copyright © 2023 - Desarrollado por Leandro
            </h6>
        </div>
                        
    </footer>
  )
}

export default Footer