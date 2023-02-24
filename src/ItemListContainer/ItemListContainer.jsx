import React ,{useState,useEffect}from 'react'
import { products } from '../mock/products'
import ItemList from './ItemList/ItemList'

const ItemListContainer = () => {
  const [productos,setProductos]=useState([])
 useEffect(()=> {
  const obtenerProductos =new Promise ((res,rej)=>{
    setTimeout(()=>{
      res(products)
    },200)
  });
  obtenerProductos.then((data)=>{
    setProductos(data)
  })
 },[])
 

  return (
    <div className='itemListContainer'>
      <div className='h3ListContainer'>
       <h3 className="animate__animated animate__backInLeft"style={{fontWeight:"bolder",fontSize:"36px"}}>Productos</h3>
      </div>
              
           <ItemList productos={productos}/> 
    </div>
  )
}

export default ItemListContainer