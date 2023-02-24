import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
  return (
    <>
    <div className='itemDetail'>
      <div className='fotoDetailContenedor'>
          <img src={item.img} alt=""  className='fotoDetail'/>
      </div>
      <h3 className='tituloProd'>{item.title}</h3>
      <h4 className='precio'> $ {item.price}</h4>
      <div style={{display:"flex",}}> 
        <h4>Encargos unicamente por</h4>
          <div className='igContenedor detailWs' style={{transform:"translate(20px,-5px)"}}>
            <a href="https://wa.me/1133392396?text=¡Estoy+interesado!" className='whatsap'> 
              <i className="bi bi-whatsapp wsap "></i>
            </a>     
          </div>        
      </div>
      <Link to="/productos" style={{textDecoration:"none",color:"black",}}><h3 style={{fontWeight:"bolder"}}>Volver a Productos</h3></Link> 
    </div>
    <div className='detailInfo'>
        <h5>{item.info}</h5>
         
       
    </div>
    
    
    </>
  )
}

export default ItemDetail