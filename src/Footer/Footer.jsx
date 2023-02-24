import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div style={{padding:"10px"}}>
        <h5 style={{fontSize:"17px"}}>Seguime en mis redes</h5>
      </div>
     <div style={{display:"flex",justifyContent:"space-around",width:"40%"}}>
          <div className='igContenedor'> 
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
      
      <div style={{backgroundColor:"black",height:"30%",color:"white"}}>
        <h6 style={{textAlign:"center",padding:"5px"}}>
        Copyright © 2023 - Desarrollado por Leandro
        </h6>
      </div>
                        
    </footer>
  )
}

export default Footer