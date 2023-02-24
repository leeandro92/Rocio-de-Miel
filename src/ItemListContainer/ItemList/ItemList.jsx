import React from 'react'
import Item from './Item/Item'

const ItemList = ({productos}) => {
  return (
    <>
    {
        productos.map((item)=>{
          return(<Item key={item.id} item={item}/>)
         })
        }
    </>
         
    
  )
}

export default ItemList

