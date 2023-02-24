import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
 const [item,setItem]=useState({})
 const {idProd}=useParams()
 useEffect(()=>{
  const getProduct =()=> new Promise((res,rej)=>{
    const unicoProducto= products.find((prod)=>prod.id===Number(idProd))
    setTimeout(()=>{
      res(unicoProducto)
    },500)
  })
 getProduct().then ((data)=>{
  setItem(data)
 })

},[idProd])
  return (
    <div className='itemDetailContainer'>
      <h3 style={{textAlign:"center",fontSize:"30px",fontWeight:"bolder",letterSpacing:"26px"}}className="animate__animated animate__backInLeft">Detalles</h3>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer