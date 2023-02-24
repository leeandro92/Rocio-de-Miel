import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { Routes,Route } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import Home from '../Home/Home'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/detail/:idProd' element={<ItemDetailContainer/>}/>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
        
    </main>
  )
}

export default Main